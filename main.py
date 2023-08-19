from flask import Flask, jsonify, render_template, Response, request
import cv2
import sys
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_image/<color>')
def process_image(color):
    src = cv2.imread('candies.png')

    if src is None:
        print('Image load failed!')
        sys.exit()

    src_hsv = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)

    if color == 'red':
        dst = cv2.inRange(src_hsv, (160, 100, 200), (179, 255, 255))
    elif color == 'blue':
        dst = cv2.inRange(src_hsv, (90, 100, 100), (130, 255, 255))
    elif color == 'green':
        dst = cv2.inRange(src_hsv, (50, 150, 0), (80, 255, 255))
    else:
        print('Invalid color:', color)
        return jsonify({'message': 'Error processing image.'}), 400

    _, buffer = cv2.imencode('.png', dst)
    processed_image_base64 = base64.b64encode(buffer).decode()

    return jsonify({'src_image': src.tolist(), 'processed_image_base64': processed_image_base64})


    

def get_hsv(event, x, y, flags, param):
    # 마우스 클릭 이벤트가 발생한 경우에만 처리
    if event == cv2.EVENT_LBUTTONDOWN:
        # 클릭한 픽셀의 좌표를 기반으로 해당 위치의 HSV 값을 얻음
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
        h, s, v = hsv[y, x]
        s_percent = int((s / 255) * 100)
        v_percent = int((v / 255) * 100)

        # H 값을 색상 이름으로 변환
        if 0 <= h < 4 or 175 <= h <= 179:
            color_name = "빨간색"
        elif 4 <= h < 25:
            color_name = "주황색"
        elif 25 <= h < 40:
            color_name = "노란색"
        elif 40 <= h < 85:
            color_name = "초록색"
        elif 85 <= h < 120:
            color_name = "파란색"
        elif 120 <= h < 145:
            color_name = "보라색"
        elif 145 <= h < 175:
            color_name = "핑크색"
        else:
            color_name = "Unknown"

        # 결과를 딕셔너리 형태로 반환
        result = {
            "color_name": color_name,
            "s_percent": s_percent,
            "v_percent": v_percent
        }
        return jsonify(result)  # JSON 형식으로 반환

# 이미지 프레임 생성 후 클라이언트에게 전달
def generate_frames():
    while True:
        ret, buffer = cv2.imencode('.jpg', image)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# get방식으로 받아온 x,y좌표를 HSV 형식으로 변환
@app.route('/get_hsv', methods=['GET'])
def get_hsv_data():
    x = int(request.args.get('x'))
    y = int(request.args.get('y'))
    result = get_hsv(cv2.EVENT_LBUTTONDOWN, x, y, None, None)
    return result


if __name__ == "__main__":
    image_path = "testImg10.jpg"  # 클릭하려는 이미지 경로
    image = cv2.imread(image_path)
    cv2.namedWindow("image")
    cv2.setMouseCallback("image", get_hsv)

    app.run(debug=True)

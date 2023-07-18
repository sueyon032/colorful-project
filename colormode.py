import cv2
import sys

src = cv2.imread('candies2.png')

if src is None:
    print('Image load failed!')
    sys.exit()

src_hsv = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)

dst1 = cv2.inRange(src, (0, 128, 0), (100, 255, 100))
dst2 = cv2.inRange(src_hsv, (35, 150, 50), (80, 255, 255))     # 녹색
# dst2 = cv2.inRange(src_hsv, (100, 150, 0), (130, 255, 255))     # 파란색
# dst2 = cv2.inRange(src_hsv, (155, 150, 0), (179, 255, 255))       # 빨간색

# import colorsys

# h = 35 / 179.0  # 색상(Hue) 값을 0과 1 사이의 범위로 정규화합니다.
# rgb = colorsys.hsv_to_rgb(h, 1, 1)  # HSV에서 RGB로 변환합니다.

# r = int(rgb[0] * 255)
# g = int(rgb[1] * 255)
# b = int(rgb[2] * 255)

# print("RGB 색상 코드:", (r, g, b))

cv2.imshow('src', src)
cv2.imshow('dst2', dst2)
cv2.waitKey()

cv2.destroyAllWindows()
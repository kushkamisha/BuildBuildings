from PIL import ImageFont, Image, ImageDraw


def generate_image(in_img, out_img, text, pos, color, text_size):
    img = Image.open(in_img)

    # draw = ImageDraw.Draw(im)

    font = ImageFont.truetype(font='10262.otf', size=text_size)
    draw = ImageDraw.Draw(img)

    draw.text(pos, text, color, font=font)
    draw = ImageDraw.Draw(img)

    img.save(out_img)


def main():
    text_arr = ['1.5%', '20 ºC', '26 ºC', '<1200',
     '162', '25%', '<440', '<20', '10%', '40%', '65%', '10%']
    positions = [(445, 493), (681, 380), (798, 380), (1090, 507), (1200, 720),
        (1085, 1065), (925, 1260), (620, 1195), (353, 993), (325, 910),
        (325, 850), (325, 785)]

    text_color = (100, 100, 100)
    # position = (325, 785)
    text_size = 20
    in_img = 'radar.png'
    out_img = 'test.png'

    for i in range(len(text_arr)):
        text = text_arr[i]
        position = positions[i]
        generate_image(in_img, out_img, text, position, text_color, text_size)
        in_img = 'test.png'


if __name__ == '__main__':
    main()

import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
import urllib
import time
from hotel_data import paris

hotels = paris['data']
def runit():
    for i in range(925,(len(hotels))):
        hotel = hotels[i]['name']
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        driver = webdriver.Chrome('chromedriver', options = chrome_options)

        url = (
            f'https://www.google.com/search?q={hotel}+booking.com&tbm=isch&ved=2ahUKEwjGkpbPhsj-AhWUhLAFHbPrC_wQ2-cCegQIABAA&oq={hotel}+booking.com&gs_lcp=CgNpbWcQA1CvEFi7EmD5GGgAcAB4AIABiAeIAcsIkgEHMS4xLjYtMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img& ei=pVxJZIasA5SJwt0Ps9ev4A8&bih=715&biw=1440&hl=en')

        driver.get(url)

        time.sleep(3)
        driver.find_element(By.XPATH,"//img[contains(@class,'Q4LuWd')]").click()
        time.sleep(7)
        image = driver.find_element(By.XPATH, "//img[contains(@class,'r48jcc pT0Scc iPVvYb')]")
        print(f'(~{hotel}{i}')
        print(f'{image.get_attribute("src")},;;')

runit()

# r48jcc pT0Scc iPVvYb

# https://cf.bstatic.com/xdata/images/hotel/max1280x900/259944224.jpg?k=aaf77e503f450333c317ff36aee97d112871ce2e1c80ed825258bdfe90b30d63&o=&hp=1


# -*- coding: utf-8 -*-
import scrapy
from daohang.items import DaohangItem

class DSpider(scrapy.Spider):
    name = 'd'

    id = 0
    i = 1
    # author = "293"      #鲁迅
    # author = "48"      #培根
    # author = "37"      #莎士比亚
    # author = "180"      #歌德
    # author = "268"      #巴尔扎克
    # author = "67"      #高尔基
    # author = "110"      #雨果
    # author = "846"      #巴金
    author = "51"      #罗曼·罗兰名言
    start_urls = ['https://www.2345daohang.com/mingyan/h/item_'+author+'.htm']

    def parse(self, response):
        content = response.xpath("//div[@id='jmlist']/div[2]/text()").getall()

        for digest in content:
            item = DaohangItem()
            digest = digest.replace( '\r\n', "。" )
            digest = digest.replace( '。。', "。" )

            self.id = self.id+1
            item['id'] = self.id
            item['digest'] = digest
            yield item

        base_url = "https://www.2345daohang.com/mingyan/h/"
        pages = response.xpath("//div[@id='jmlist']/div[3]/a")
        pages_num = len( pages )-2
        print( "pages_num------", pages_num )
        if self.i<= pages_num:
            self.i = self.i+1
            print( "i--------", self.i )
            next_page = base_url+"item_"+self.author+"_"+str(self.i)+".htm"              #"+"item_206_"+str(i)+".htm"
            yield scrapy.Request( next_page, callback=self.parse )


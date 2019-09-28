# -*- coding: utf-8 -*-
import scrapy
from daohang.items import DaohangItem

class DSpider(scrapy.Spider):
    name = 'd'

    id = 0
    author = "293"      #鲁迅
    start_urls = ['https://www.2345daohang.com/mingyan/h/item_'+author+'.htm']

    def parse(self, response):
        content = response.xpath("//div[@id='jmlist']/div[2]/text()").getall()

        for word in content:
            item = DaohangItem()
            word = word.replace( '\r\n', "。" )
            word = word.replace( '。。', "。" )

            self.id = self.id+1
            item['id'] = self.id
            item['word'] = word
            yield item

        base_url = "https://www.2345daohang.com/mingyan/h/"
        pages = response.xpath("//div[@id='jmlist']/div[3]/a")
        pages_num = len( pages )-2
        i = 1
        if i<= pages_num:
            i = i+1
            next_page = base_url+"item_"+self.author+"_"+str(i)+".htm"              #"+"item_206_"+str(i)+".htm"
            yield scrapy.Request( next_page, callback=self.parse )


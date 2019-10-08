# -*- coding: utf-8 -*-
import scrapy
from lz13.items import Lz13Item
from  scrapy import Selector

class LSpider(scrapy.Spider):

    id = 0

    name = 'l'
    # start_urls = ['https://www.lz13.cn/mingrenmingyan/12370.html']
    start_urls = ['https://www.lz13.cn/mingrenmingyan/176798.html']

    # allowed_domains = ['www.lz13.cn']
    # start_urls = ['http://www.lz13.cn/']


    def parse(self, response):
        lines = response.xpath("//p[position()>1]").xpath("string(.)").extract()
        for line in lines:
            item = Lz13Item()

            self.id = self.id+1
            item['id'] = self.id

            line = line.replace( "(www.lz13.cn)","。" )
            start = line.find("、")+1
            item['digest'] = line[start:]

            yield item





















    def parse2(self, response):
        lines = response.xpath("//p/text()").getall()
        for line in lines:
            item = Lz13Item()

            self.id = self.id+1
            item['id'] = self.id

            start = line.find("、")+1
            item['digest'] = line[start:]

            # if not line.isspace():
            #     item['digest'] = line[ start: ]
            # else:
            #     item['digest'] = "   "

            yield item

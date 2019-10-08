# -*- coding: utf-8 -*-
import scrapy


class DSpider(scrapy.Spider):
    name = 'd'
    # allowed_domains = ['https://www.dxsbb.com/news/2723.html']
    start_urls = ['https://www.dxsbb.com/news/5384.html']

    def parse(self, response):
        lines = response.xpath("//article[@class='article']/p[position()>2 and position()<last()-1]/text()").getall()
        for line in lines:

            item = SohuItem()
            self.id = self.id + 1
            item['id'] = self.id
            local_start = line.find("、")+1
            local_end = line.find("（")

            if local_end>0:
                line = line[ local_start : local_end ]
            else:
                line = line[local_start:]
            item['digest'] = line
            print( "line----------", line )
            yield item
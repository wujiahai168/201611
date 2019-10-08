# -*- coding: utf-8 -*-
import scrapy
from sohu.items import SohuItem

class SSpider(scrapy.Spider):
    id = 0

    name = 's'

    start_urls = ['https://www.sohu.com/a/253626053_100223663?spm=smpc.author.fd-d.16.1569773899304tNaBy4K']       # 屈原

    # start_urls = ['http://www.sohu.com/a/255434564_100223663']
    # start_urls = ['https://www.sohu.com/a/255435205_100223663?spm=smpc.author.fd-d.6.1569773899304tNaBy4K']
    # allowed_domains = ['www.sohu.com']
    # start_urls = ['http://www.sohu.com/']

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

        # pass

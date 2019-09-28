


# 结合 scrapy crawl itcast 成功运行
# -*- coding: utf-8 -*-
import scrapy
from ITcast.items import ItcastItem

class ItcastSpider(scrapy.Spider):
    name = 'itcast'
    # allowed_domains = ["itcast.cn"]
    start_urls = ["http://quotes.toscrape.com"]
    # start_urls = [f"http://quotes.toscrape.com/page/{p}/" for p in range(1,50) ]

    # allowed_domains = ["itcast.cn"]
    # start_urls = ["http://'http://www.itcast.cn/"]

    def parse(self, response):
        # items = []
        quotes = response.xpath("//div[@class='quote']")
        for q in quotes:
            item = ItcastItem()
            # text = q.xpath("span/text()").get()
            text = q.xpath("./span[@class='text']/text()").get()
            author = q.xpath("./span/small/text()").get()
            item['text'] = text
            item['author'] = author

            # items.append( item )
            yield item

        next_page = response.xpath("//li[@class='next']/a/@href").get()
        if next_page:
            next_url = response.urljoin( next_page )
            # next_url = "http://quotes.toscrape.com" + next_page
            yield scrapy.Request( next_url, callback = self.parse )

        # return items


        # quote = response.xpath("//div[@class='quote']")
        # for q in quote:
        #     author = quote.xpath("//small[@class='author']/text()").getall()
        #     with open( "i6.json", "w" ) as f:
        #         for a in author:
        #             f.writelines( a+"\n" )
        #         f.close()

















            # text = q.xpath("//span[@class='text']").get()
            # with open( 'i4.json', "w" ) as f:
                # f.write( text )




        # with open( "i3.json", "w" ) as f:
        #     f.write( text )

        # print( "text---", text )

        # with open( "i2.json", "wb" ) as f:
        #     f.write( response.body )

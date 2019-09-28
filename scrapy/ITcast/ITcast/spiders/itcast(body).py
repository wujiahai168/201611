


# # 结合 scrapy crawl itcast 成功运行
# # -*- coding: utf-8 -*-
# import scrapy
#
#
# class ItcastSpider(scrapy.Spider):
#     name = 'itcast'
#     # allowed_domains = ["itcast.cn"]
#     start_urls = ["http://quotes.toscrape.com/page/2/"]
#     # allowed_domains = ["itcast.cn"]
#     # start_urls = ["http://'http://www.itcast.cn/"]
#
#     def parse(self, response):
#         with open( "itcast.json", "wb" ) as f:
#             f.write( response.body )
#         # print( response.body )
#         # pass

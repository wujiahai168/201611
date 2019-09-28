


import scrapy
from stockstar.items import StockstarItem

class QuotesSpider( scrapy.Spider ):
    name = "quotes"
    # allowed_domains = ["quotes.toscrape.com"]
    start_urls = [
        "http://www.quotes.toscrape.com"
    ]

    def parse_none(self,response,node):
        item = StockstarItem()
        item['text'] = node.xpatch("text").get()
        item['author'] = node.xpatch("author").get()

        print( 'item------',item )

        # for i in item:
        #     yield i

        # item['tags'] = node.xpatch("tags").getall()
        # self.logger.info( "输出---%s---", response.url )














# import scrapy
#
# class QuotesSpider( scrapy.Spider ):
#     name = "quotes"
#     start_urls = [
#         "http://quotes.toscrape.com/page/1/"
#     ]
#
#     def parse(self,response):
#         for quote in response.css("div.quote"):
#             yield {
#                 'text':     quote.css("span.text::text").get(),
#                 'author':   quote.css("small.author::text").get(),
#                 'tags':     quote.css("div.tags a.tag::text").getall()
#             }
#
#         for href in response.css("li.next a::attr(href)"):
#             yield response.follow(href, callback=self.parse)

        # next_page = response.css("li.next a::attr(href)").get()
        # if next_page is not None:
        #     next_page = response.urljoin( next_page )
        #     yield scrapy.Request( next_page, callback=self.pares )

    # def parse(self, response):
    #     for quote in response.css("div.quote"):
    #         yield{
    #             'text':quote.css("span.text::text").get(),
    #             'author':quote.css("small.author::text").get(),
    #             'tags':quote.css("div.tags a.tag::text").getall(),
    #         }

    # def start_requests(self):
    #     urls = [
    #         "http://quotes.toscrape.com/page/1/"
    #     ]
    #     for url in urls:
    #         yield scrapy.Request( url=url, callback=self.parse )
    #
    # def parse( self, response ):
    #     page = response.url.split("/")[-2]
    #     filename = page
    #     with open( filename, 'wb' ) as f:
    #         f.write( response.body )
    #
    #     self.log( 'Save file %s' % filename )
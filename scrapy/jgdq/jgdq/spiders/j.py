# -*- coding: utf-8 -*-
import scrapy


class JSpider(scrapy.Spider):
    name = 'j'
    allowed_domains = ['jgdq']
    start_urls = ['http://jgdq/']

    def parse(self, response):
        pass

# -*- coding: utf-8 -*-
import json

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class DaohangPipeline(object):
    def __init__(self):
        self.f = open( "鲁迅.json", "wb" )

    def process_item(self, item, spider):
        item = json.dumps( dict(item), ensure_ascii=False )+"\n"
        self.f.write( item.encode("utf-8") )
        # return item

    def close_spider(self,spider):
        self.f.close()
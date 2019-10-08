# -*- coding: utf-8 -*-
import json

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class DaohangPipeline(object):
    def __init__(self):
        self.first = True
        self.f = open( "罗曼罗兰.json", "w", encoding="utf-8" )
        self.f.write( "[" )

    def process_item(self, item, spider):
        item = json.dumps( dict(item), ensure_ascii=False )

        if self.first:
            self.first = False
            line = "\n"+item.encode('utf-8').decode()
        else:
            line = ",\n"+ item.encode('utf-8').decode()

        self.f.write( line.encode('utf-8').decode() )

        # self.f.write( str( item.encode(encoding='UTF-8') )+",\n"  )
        # self.f.write( str( item.encode("utf-8") ) )
        # return item

    def close_spider(self,spider):
        self.f.write( "]" )
        self.f.close()
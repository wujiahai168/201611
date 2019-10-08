# -*- coding: utf-8 -*-
import json

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class DxsbbPipeline(object):
    def __init__(self):
        self.f = open( "杜威.json", "w", encoding="utf-8" )
        self.f.write("[")


    def process_item(self, item, spider):
        line = json.dumps( dict(item), ensure_ascii=False)

        line = ""
        if self.first:
            self.first = False
            line = "\n" + item
        else:
            line = ",\n" + item

        self.f.write(line)

        return item

    def close_spider(self,spider):
        self.f.write("]")
        self.f.close()
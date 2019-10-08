# -*- coding: utf-8 -*-
import json

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class Lz13Pipeline(object):
    def __init__(self):
        self.first = True
        # self.f = open( "雷锋.json", "w", encoding="utf-8" )
        # self.f = open( "叔本华.json", "w", encoding="utf-8" )
        # self.f = open( "胡适.json", "w", encoding="utf-8" )
        # self.f = open( "孔子的名言.json", "w", encoding="utf-8" )
        # self.f = open( "秋谨.json", "w", encoding="utf-8" )
        # self.f = open( "杰克韦尔奇名言5.json", "w", encoding="utf-8" )
        # self.f = open( "纪伯伦.json", "w", encoding="utf-8" )
        # self.f = open( "托尔斯泰.json", "w", encoding="utf-8" )
        # self.f = open( "契诃夫.json", "w", encoding="utf-8" )
        # self.f = open( "马寅初.json", "w", encoding="utf-8" )
        # self.f = open( "巴甫罗夫.json", "w", encoding="utf-8" )
        # self.f = open( "亚里士多德.json", "w", encoding="utf-8" )
        # self.f = open( "纳兰性德.json", "w", encoding="utf-8" )
        # self.f = open( "晏殊.json", "w", encoding="utf-8" )
        # self.f = open( "元稹.json", "w", encoding="utf-8" )
        # self.f = open( "骆宾王.json", "w", encoding="utf-8" )
        # self.f = open( "陆机.json", "w", encoding="utf-8" )
        # self.f = open( "淮南子.json", "w", encoding="utf-8" )
        # self.f = open( "南怀瑾.json", "w", encoding="utf-8" )
        # self.f = open( "武则天名言.json", "w", encoding="utf-8" )
        # self.f = open( "比尔·盖茨.json", "w", encoding="utf-8" )
        # self.f = open( "陶渊明.json", "w", encoding="utf-8" )
        # self.f = open( "曹植.json", "w", encoding="utf-8" )
        # self.f = open( "朱熹.json", "w", encoding="utf-8" )
        # self.f = open( "朱光潜.json", "w", encoding="utf-8" )
        self.f = open( "陶行知.json", "w", encoding="utf-8" )
        self.f.write("[")

    def process_item(self, item, spider):
        # line = json.dumps( dict(item), ensure_ascii=False )

        line = ""

        if not item['digest'].isspace():

            item = json.dumps( dict(item), ensure_ascii=False )

            if self.first:
                self.first = False
                line = "\n"+item.encode('utf-8').decode()
            else:
                line = ",\n"+ item.encode('utf-8').decode()

        self.f.write( line.encode('utf-8').decode() )

        return item

    def close_spider(self,spider):
        self.f.write( "]" )
        self.f.close()
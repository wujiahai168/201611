
import requests

if __name__ == "__main__":

    url = "http://www.baidu.com"

    response = requests.get( url=url )

    # response = requests.post( url=url, data={ 'name':'abc' } )

    print( response.content )

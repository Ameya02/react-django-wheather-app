from rest_framework.response import Response
from rest_framework.decorators import api_view
from urllib.request import urlopen
import json
import os
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/sentcityinfo/',
            'method': 'POST',
            'body': {'body':""},
            'description':'Sents a city name to weather api'

        },
        {
            'Endpoint': '/weatherinfo/',
            'method': 'POST',
            'body': {'body': ""} ,
            'description':'Sents a city name to weather api'

        }
            ]
    
    return Response(routes)


@api_view(['POST'])
def weatherInfo (request):
    API_KEY = str(os.getenv('API_KEY'))
    GEO_URL = str(os.getenv('GEO_API'))
    WEATHER_URL = str(os.getenv('WEATHER_API'))

    data = request.data
    cityName = data['cityName']
    try:
        
        Geo_API = urlopen(GEO_URL+cityName+"&limit=5&appid="+API_KEY).read()
  
        # converting JSON data to a dictionary
        # print(source)
        data_list = json.loads(Geo_API)
        # print(list_of_data)
        # data for variable list_of_data
        GEO_data = {
            "name": str(data_list[0]['name']),
            "lon": str(data_list[0]['lon']),
            "lat": str(data_list[0]['lat']),
        }
        Weather_API = urlopen(WEATHER_URL+"?units=metric&lat="+GEO_data['lat'] +"&lon="+GEO_data['lon']+"&appid="+API_KEY).read()
        w_data_list =json.loads(Weather_API)
        Weather_Data = {
            "name": str(data_list[0]['name']),
            "country": str(w_data_list['sys']["country"]),
            "weather":w_data_list["weather"][0]["main"],
            "icon":w_data_list["weather"][0]["icon"],
            "temp":w_data_list["main"]["temp"],
            "humidity":w_data_list["main"]["humidity"],
            "pressure":w_data_list["main"]["pressure"],
            "wind":w_data_list["wind"]["speed"]

        }
        return Response(json.dumps(Weather_Data))
    except Exception:
        pass
    return Response(Exception, status=400)

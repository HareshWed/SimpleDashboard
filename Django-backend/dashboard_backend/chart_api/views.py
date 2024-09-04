from rest_framework.response import Response
from rest_framework.decorators import api_view

# Candlestick data
@api_view(['GET'])
def candlestick_data(request):
    data = [
        {
            "data": [
              {
                "x": "2023-01-01", 
                "y": [30.0, 40.0, 25.0, 35.0]
              },
              {
                "x": "2023-01-02", 
               "y": [35.0, 45.0, 30.0, 40.0]
              },
              {
               "x": "2023-01-03", 
               "y": [40.0, 44.0, 25.0, 35.0]
              },
              {
               "x": "2023-01-04", 
               "y": [37.0, 35.0, 30.0, 20.0]
              },
              {
               "x": "2023-01-05", 
               "y": [36.0, 42.0, 35.0, 45.0]
              },
              {
               "x": "2023-01-06", 
               "y": [35.0, 45.0, 30.0, 40.0]
              },
              {
               "x": "2023-01-07", 
               "y": [32.0, 47.0, 35.0, 37.0]
              },
              {
               "x": "2023-01-08", 
               "y": [35.0, 25.0, 31.0, 36.0]
              },
              {
               "x": "2023-01-10", 
               "y": [30.0, 40.0, 25.0, 35.0]
              }
            ]
          }
    ]
    return Response(data)

# Line Chart Data
@api_view(['GET'])
def line_chart_data(request):
    data = [
        {
            "data": [10, 20, 30, 40],
            "categories": ["Jan", "Feb", "Mar", "Apr"]
        }
    ]
    return Response(data)

# Bar Chart Data
@api_view(['GET'])
def bar_chart_data(request):
    data = [
        {
            "data":  [100, 150, 200],
            "categories": ["Product A", "Product B", "Product C"]
        }
    ]
    return Response(data)

# Pie Chart Data
@api_view(['GET'])
def pie_chart_data(request):
    data = [
        {
            "series": [300, 50, 100],
            "labels": ["Red", "Blue", "Yellow"]
        }
    ]
    return Response(data)

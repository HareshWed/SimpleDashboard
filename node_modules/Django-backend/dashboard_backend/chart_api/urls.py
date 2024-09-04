from django.urls import path
from .views import candlestick_data, line_chart_data, bar_chart_data, pie_chart_data

urlpatterns = [
    path('candlestick/', candlestick_data),
    path('line-chart/', line_chart_data),
    path('bar-chart/', bar_chart_data),
    path('pie-chart/', pie_chart_data),
]

import pandas
import os
import json
from rest_framework.decorators import permission_classes
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

@permission_classes((permissions.AllowAny,))
class mobility_usage_view(APIView):
        def get(self, request, *args, **kwargs):
                # fileLocation = os.path.join(os.path.dirname('manage.py'),
                # './backend/mobility.csv'
                # )
                # fileDir = os.path.dirname(os.path.realpath('__file__'))
                # fileLocation = os.path.join(fileDir, '/mobility.csv')
 
                fileLocation = os.path.realpath("mobility.csv")

                df = json.loads(pandas.read_csv(fileLocation).to_json())
                return Response(df)

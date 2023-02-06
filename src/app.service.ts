import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nameId: string): any {
    console.log("nameId", nameId);
    return {
      "MpStatusCode": 0,
      "data": {
          "nameId": "N00207861907",
          "letters": [
              {
                  "toDoId": "T00064139922",
                  "templateType": "LEP   ",
                  "templateName": "L05",
                  "letterName": "L05 Removal of LEP due to LIS",
                  "dateScheduled": "2021-07-14T09:36:41",
                  "dateCompleted": "2021-07-28T07:29:23",
                  "resultPrimary": "Cancel",
                  "resultSecondary": "Letter not sent"
              }
          ]
      },
      "errors": []
  }
  }
}

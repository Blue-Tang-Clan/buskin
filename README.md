# buskin

![Demo GIF](https://github.com/Blue-Tang-Clan/buskin/blob/development/public/demo_gif.gif?raw=true)

# Setup

Fork and clone the [backend repo](https://github.com/Blue-Tang-Clan/buskin-Backend) and follow setup instructions there.

Fork and clone this repo.

Install all dependencies:

>$npm install

Create new `config.js` file and copy contents of `example.config.js` into `config.js` file. Fill in data as necessary.

Start server and client:

>$npm run prod

Navigate to: http://localhost:3000/

# About Buskin

### Problem

Busking is the act of performing music in public with the short term hope of earning tips from passerby and, for some, a long term goal of gaining attention and perhaps a following that leads to something more. In today’s increasingly cashless world, this short term goal is hindered by fewer passerby with money to tip, which makes sustaining the lifestyle harder and makes reaching the long term goal more difficult. And as cities become more crowded, so too grows the potential fighting for busking space amongst the busking community.

### How Buskin solves it

Buskin seeks to solve these problems by connecting artists to each other, to their fans, and providing a space for digitally seeking and receiving support. Both artists and fans can create profiles. Artists can then schedule and delete events and update their profile accordingly. Artists are also notified if an event they wish to schedule is 30 yards from another artist's performance at the same time, warns them, and, if they choose to schedule, notifies the other artist(s). Fans can follow and unfollow artists, save and delete events, and search for artists/events based on keywords.

The app is composed of seven main sections and their subcomponents/features:

### Navigation Bar
> - Search Bar
> - Registration - Sign Up/Login
> - Logged In User Menu

### Home Page
> - Image Carousel
> - Local Events Map
> - Popular Events
> - Upcoming Performances
> - Popular Genre Filter/Search
> - Popular Artists

### Artist Profile Page
> - Artist information
> - Payment/tip buttons
> - Upcoming Events

### Event Page
> - Event information
> - Event specific map

### Fan Dashboard
> - Followed Artists
> - Saved Events

### Artist Dashboard
> - Follower Count
> - Scheduled Events list
> - Map for viewing event locations
>> - Schedule event subcomponent in map
> - Edit Profile Page with QR code download

### QR Focused Artist Profile
> - Artist information
> - Payment/tip buttons
> - Logo redirect to main site

# REST API for Buskin

## GET Artist Details

`/artist/details/:artist_id`

#### Example Response

    {
        "id": 1,
        "name": "Wei",
        "bio": "I check on groups",
        "genre": "vocal",
        "instrument": "guitar",
        "pic": "https://imagesbluetang.s3.amazonaws.com/1656606794630",
        "venmo": "[accountname]",
        "cashapp": "[accountname]",
        "paypal": "[accountname]",
        "fan_num": 5,
        "events": [
            {
                "id": 153,
                "name": "[event name]",
                "street": "[event street]",
                "city": "[event city]",
                "state": "[event state]",
                "latitude": 40.75609790590052,
                "longitude": -73.99574219055113,
                "date": "06/30/2022",
                "start_time": "10:00",
                "end_time": "10:00"
            },
            //...
        ],
        "followers": [
            "bgoodhand0@ow.ly",
            "aedinboro1@flavors.me",
            "ljirus2@mozilla.org",
            "ajohnigan3@desdev.cn",
            "sbrito4@cnet.com",
            //...
        ]
    }

## GET Fan Details

`/fan/dashboard/:fanId`

#### Example Response

    {
        "username":"jgeraldi0",
        "address": {
            "city":"Saint Paul",
            "state":"MN",
            "street":"1 Mesta Place"
            },
        "events": [
            {
                "event_id":16,
                "event_name":"Mercury",
                "event_street":"9 Park Meadow Lane",
                "event_city":"Bowie",
                "event_state":"MD",
                "event_longitude":-76.8777,
                "event_latitude":38.8336,
                "event_date":"08/13/2022",
                "event_start_time":"12:42 PM",
                "event_end_time":"5:56 AM",
                "event_pic":"https://images.unsplash.com/....."
            },
            //...
        ],
        "artists": [
            {
                "artist_id":1,
                "artist_display_name":"Wei",
                "artist_instrument":"guitar",
                "artist_genre":"vocal",
                "artist_bio":"I check on groups",
                "artist_pic":"https://imagesbluetang.s3.amazonaws.com/1656606794630",
                "artist_venmo":"[accountname]",
                "artist_paypal":"[accountname]",
                "artist_cashapp":"[accountname]",
                "artist_fan_num":6
            },
            //...
        ]
    }

## GET Events

`/events/:date`

#### Example Response

    [
        {
            "id":"167",
            "name":"Val's Guitar Party",
            "street":"Val St",
            "city":"NYC",
            "state":"NY",
            "longitude":"-73.98711249023387",
            "latitude":"40.729348106242135",
            "art_id":"76",
            "date":"07/03/2022",
            "start_time":"22:00",
            "end_time":"23:00",
            "description":"The best guitar party Val has ever thrown!",
            "pic":"https://images.unsplash.com/...",
            "display_name":"Blue Tang Clan"
        },
        //...
    ]

## GET One Event

`/events/:date`

#### Example Response

    [
        {
            "id":"167",
            "name":"Val's Guitar Party",
            "street":"Val St",
            "city":"NYC",
            "state":"NY",
            "longitude":"-73.98711249023387",
            "latitude":"40.729348106242135",
            "art_id":"76","date":"07/03/2022",
            "start_time":"22:00",
            "end_time":"23:00",
            "description":"The best guitar party Val has ever thrown!",
            "pic":"https://imagesbluetang.s3.amazonaws.com/1656689803358",
            "display_name":"Blue Tang Clan",
            "instrument":"Piano",
            "genre":"Classical",
            "bio":"Best Piano Player Ever",
            "venmo":"[accountname]",
            "paypal":"[accountname]",
            "cashapp":"[accountname]",
            "fan_num":6,
            "auth_id":"165"
        }
    ]

## GET Check Events

`/check/events?latitude=[integer]&longitude=[integer]&date=[string]&start_time=[string]`

#### Example Response (array of emails to notify)

    [
        "bgoodhand0@ow.ly",
        "aedinboro1@flavors.me",
        "ljirus2@mozilla.org",
        "ajohnigan3@desdev.cn",
        "sbrito4@cnet.com",
        //...
    ]

## GET Homepage Display Info

`/homepage/:latitude/:longitude`

#### Example Response

    {
        "coming_events": [
            {
                "id": 78,
                "event_name": "Maybach",
                "street": "0249 Shasta Circle",
                "city": "Detroit",
                "state": "MI",
                "longitude": -83.1508,
                "latitude": 42.2399,
                "date": "07/01/2022",
                "start_time": "3:22 PM",
                "end_time": "4:03 PM",
                "description": "streamline distributed platforms",
                "pic": "https://media.istockphoto.com/photos/..."
            },
            //...
        ],
        "local_events": [
            {
                "id": 78,
                "event_name": "Maybach",
                "street": "0249 Shasta Circle",
                "city": "Detroit",
                "state": "MI",
                "longitude": -83.1508,
                "latitude": 42.2399,
                "date": "07/01/2022",
                "start_time": "3:22 PM",
                "end_time": "4:03 PM",
                "description": "streamline distributed platforms",
                "pic": "https://media.istockphoto.com/photos/..."
            },
            //...
        ],
        "artists": [
            {
                "id": 2,
                "artist_name": "Andres Greally",
                "instrument": "Harmonica",
                "genre": "jazz",
                "bio": "Loves to chill and jam",
                "pic": "https://imagesbluetang.s3.amazonaws.com/1656504386286",
                "venmo": "[accountname]",
                "paypal": "[accountname]",
                "cashapp": "[accountname]",
                "fan_num": 1
            },
            //...
        ],
        "talent": {
            "id": 30,
            "artist_name": "Pierre Carmo",
            "instrument": "Ghatam",
            "genre": "Country",
            "bio": "transform clicks-and-mortar partnerships",
            "pic": "https://images.unsplash.com/photo...",
            "venmo": "[accountname]",
            "paypal": "[accountname]",
            "cashapp": "[accountname]",
            "fan_num": 8
        }
    }

## GET Homepage Genre Info

`/homepage/genre`

#### Example Response

    [
        {
            "genres": "COUNTRY"
        },
        {
            "genres": "CLASSICAL"
        },
        {
            "genres": "FUNK"
        },
        //...
    ]

## GET Homepage Specific Genre Info

`/homepage/:genre`

#### Example Response

    [
        {
            "id": "31",
            "artist_name": "Christos Longmire",
            "instrument": "guitar",
            "genre": "Country",
            "bio": "enable revolutionary action-items",
            "pic": "https://images.unsplash.com/photo...",
            "venmo": "[accountname]",
            "paypal": "[accountname]",
            "cashapp": "[accountname]",
            "fan_num": 4
        },
        //...
    ]

## GET Search Artist/Events by Keyword

`/search?query=[string]`

#### Example Response

    {
        "artists": [
            {
                "id": 13,
                "name": "Rosamond Fellgett",
                "pic": "https://images.unsplash.com/photo..."
            },
            //...
        ],
        "event": [
            {
                "id": 167,
                "name": "Val's Guitar Party",
                "city": "NYC",
                "state": "NY",
                "pic": "https://images.unsplash.com/photo..."
            },
            //...
        ]
    }

# Technology Choices

### Frontend

#### Framework

- React
- Mapbox
- React-Router-Dom
- axios

#### CSS

- styled-components
- Material-UI

### Backend

#### Server

- Node.js
- Express

# Fullstack Collaborators

### Yaokai Dong

 - Main role: Database Owner

 - Github: <a href='https://github.com/ykdong'>ykdong</a>

 - LinkedIn: <a href='https://www.linkedin.com/mwlite/in/yaokai-dong-44ab15178'>https://www.linkedin.com/mwlite/in/yaokai-dong-44ab15178</a>

### Nikko Elliott

 - Main role: Project Manager

 - Github: <a href='https://github.com/nelliott82'>nelliott82</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/nelliott3482/'>https://www.linkedin.com/in/nikkoelliott/</a>

 ### Yuki Ogawa

 - Main role: Fullstack Extraordinaire

 - Github: <a href='https://github.com/Yuki-OG'>Yuki-OG</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/yuki-ogawa/'>https://www.linkedin.com/in/yuki-ogawa/</a>

 ### Utku Ozkan

 - Main role: Architect Co-Owner

 - Github: <a href='https://github.com/utkucanozkan1'>utkucanozkan1</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/utku-can-ozkan/'>https://www.linkedin.com/in/utku-can-ozkan/</a>

 ### Val Pizzo

 - Main role: UI Co-Owner

 - Github: <a href='https://github.com/valpizzo'>valpizzo</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/valpizzo/'>https://www.linkedin.com/in/valpizzo/</a>

 ### Fangzhuo Xi

 - Main role: Architect Co-Owner

 - Github: <a href='https://github.com/FangzhuoXi'>FangzhuoXi</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/fangzhuoxi/'>https://www.linkedin.com/in/fangzhuoxi/</a>

 ### Yao Yu

 - Main role: UI Owner

 - Github: <a href='https://github.com/amyyuyao'>amyyuyao</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/yao-yu-08ab1971/'>https://www.linkedin.com/in/yao-yu-08ab1971/</a>

  ### Kedir Zeinu

 - Main role: Fullstack Extraordinaire

 - Github: <a href='https://github.com/Kedirz'>Kedirz</a>

 - LinkedIn: <a href='https://www.linkedin.com/in/kedirzeinu'>https://www.linkedin.com/in/kedirzeinu</a>

# MIT License

MIT License

Copyright (c) 2022 Blue Tang Clan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()

{
    "success": {
      "total": 1
    },
    "contents": {
      "jokes": [
        {
          "category": "jod",
          "title": "Joke of the day ",
          "description": "Joke of the day ",
          "background": "",
          "date": "2019-01-23",
          "joke": {
            "title": "Courtship Signals",
            "length": "83",
            "clean": "1",
            "racial": "0",
            "date": "2019-01-23",
            "id": "He3_WpaNfBV1Hs7zMLsR4QeF",
            "text": "Q. Why shouldn't you marry a tennis player?\r\nA. Because Love means nothing to them."
          }
        }
      ],
      "copyright": "2018-20 https://jokes.one"
    }
  }

  function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod/categories", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()

{
    "success": {
      "total": 3
    },
    "contents": {
      "categories": {
        "jod": {
          "category": "jod",
          "title": "Joke of the day ",
          "description": "Joke of the day ",
          "background": ""
        },
        "animal": {
          "category": "animal",
          "title": "Animal Joke of the day ",
          "description": "Animal Joke of the day ",
          "background": ""
        },
        "blonde": {
          "category": "blonde",
          "title": "Blonde joke of the day!",
          "description": "Blonde joke of the day!",
          "background": ""
        }
      },
      "copyright": "2018-20 https://jokes.one"
    }
  }

  {
    "success": {
      "total": 1
    },
    "contents": {
      "jokes": [
        {
          "title": "Mark Bookspan",
          "length": "70",
          "clean": null,
          "racial": null,
          "id": "_T_fW9BD2_FaHaTr5IrlsAeF",
          "text": "\nKnock-knock\n Who's there? \n\n\nMark Bookspan \n\n\nQuick, bolt the door!\n\n"
        }
      ],
      "copyright": "2019-20 https://jokes.one"
    }
  }

  {
    "success": {
      "total": 1
    },
    "contents": {
      "jokes": [
        {
          "title": "Useless Elephant",
          "length": "64",
          "clean": "0",
          "racial": "0",
          "id": "2cT1g9kqoeCO9FqhRnHObgeF",
          "text": "What do you call an elephant that doesn't matter? An irrelephant"
        }
      ],
      "copyright": "2019-20 https://jokes.one"
    }
  }

  {
    "success": {
      "total": 1
    },
    "contents": {
      "jokes": [
        {
          "title": "A blonde was bragging about her knowledge of state capitals.",
          "length": "208",
          "clean": "1",
          "racial": null,
          "id": "8_EqzUsq9YKt1b8jhNsc3geF",
          "text": "A blonde was bragging about her knowledge of state capitals. She proudly says, Go ahead, ask me, I know all of them. A friend says, OK, what's the capital of Wisconsin? The blonde replies, Oh, that's easy: W."
        }
      ],
      "copyright": "2018-20 https://jokes.one"
    }
  }

  {
    "success": {"total": 1  },
    "content": 
         {
            "joke": {"id": "0tztT1wYHRzdTf7jIccAzweF"}
         } 
}

{
    "success": { "total": 1  },
    "content": "Joke with id 0tztT1wYHRzdTf7jIccAzweF is deleted"
}
 
{
    "success": {
      "total": 1
    },
    "contents": {
      "jokes": [
        {
          "title": "So that's the reason",
          "length": "89",
          "clean": 1, 
          "racial": null,
          "id": "mL_RDAbKC_3fHncrxPLxDweF",
          "text": "Why did the physics teacher break up with the biology teacher? \n\nThere was no chemistry.\n"
        }
      ],
      "copyright": "2018-20 https://jokes.one"
    }
  }
       
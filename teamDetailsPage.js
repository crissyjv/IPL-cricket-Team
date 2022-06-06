
$(function () {


    const teamdetails = [
  
      {
        id: "0",
        classname: "cskclass",
        teamname: 'chennai super kings',
        teamicon: "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png",
        players: [{
          playername: "Ambati Thirupathi Rayudu",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4176.png",
          team: "csk",
          price: "1.7cr"
        },
        {
          playername: "Cheteshwar Arvind Pujara",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3896.png",
          team: "csk",
          price: "80lac"
        },
        {
          playername: "Francois du Plessis",
          team: "csk",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/28891.png",
          price: "90lac"
        },
        {
          playername: "Suresh Kumar Raina",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3700.png",
          team: "csk",
          price: "365lac"
        },
        {
          playername: "Mahendra Singh Dhoni",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3676.png",
          team: "csk",
          price: "2.3cr"
        },
        {
          playername: "Dwayne John Bravo",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3556.png",
          team: "csk",
          price: "90lac"
        },
        {
          playername: "Shardul Narendra Thakur",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63345.png",
          team: "csk",
          price: "1cr"
        },
        {
          playername: "Lungisani True-man Ngidi",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64225.png",
          team: "csk",
          price: "2.1cr"
        },
        {
          playername: "KM Asif",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67709.png",
          team: "csk",
          price: "210lac"
        },
        {
          playername: "Karn Vinod Sharma",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5090.png",
          price: "70lac",
          team: "csk"
        },
        {
          playername: "Jason Paul Behrendorff",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/57041.png",
          team: "csk",
          price: "1.2lac"
        },
        {
          playername: "Deepak Lokandersingh Chahar",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/59547.png",
          team: "csk",
          price: "60lac"
        },
        {
          playername: "Ravindrasinh Anirudhsinh Jadeja",
          image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3850.png",
          team: "csk",
          price: "20lac"
        }],
        topbatsman: "MURALI VIJAY",
        topbowler: "RAVINDRA JADEJA",
        champoinshipwoncount: "3",
      },
  
  
      {
        id: "1",
        classname: "delhiclass",
        teamname: 'delhi capitals',
        teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png",
        players: [
          {
            playername: "Ajinkya Madhukar Rahane",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3991.png",
            team: "delhi capitals",
            price: "2.3cr"
          },
          {
            playername: "Prithvi Pankaj Shaw",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66812.png",
            team: "delhi capitals",
            price: "1cr"
          },
          {
            playername: "Shikhar Dhawan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3722.png",
            team: "delhi capitals",
            price: "90lacs"
          },
          {
            playername: "Shimron Odilon Hetmyer",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64861.png",
            team: "delhi capitals",
            price: "1.4cr"
          }, {
            playername: "Steven Peter Devereux Smith",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4308.png",
            team: "delhi capitals",
            price: "90lacs"
          },
          {
            playername: "Rishabh Rajendra Pant",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65756.png",
            team: "delhi capitals",
            price: "2.3cr"
          },
          {
            playername: "Samuel William Billings",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/58285.png",
            team: "delhi capitals",
            price: "1.1cr"
          },
          {
            playername: "Vishnu Vinod",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64783.png",
            team: "delhi capitals",
            price: "1.8cr"
          }, {
            playername: "Amit Mishra",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3480.png",
            team: "delhi capitals",
            price: "90lacs"
          }, {
            playername: "Avesh Khan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64511.png",
            team: "delhi capitals",
            price: "2.0cr"
          }, {
            playername: "Ishant Sharma",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3899.png",
            team: "delhi capitals",
            price: "90lacs"
          }, {
            playername: "Thomas Kevin Curran",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64149.png",
            team: "delhi capitals",
            price: "1.3cr"
          }],
  
        topbatsman: "RISHABH PANT",
        topbowler: "AMIT MISHRA",
        champoinshipwoncount: "No",
  
      },
  
  
  
  
      {
        id: "2",
        classname: "kolkataclass",
        teamname: 'KOLKATA KNIGHT RIDERS',
        teamicon: "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png",
        players: [
          {
            playername: "Eoin Joseph Gerard Morgan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3823.png",
            team: "kolkata knight riders",
            price: "1.5cr"
          },
          {
            playername: "Gurkeerat Rupinder Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/57019.png",
            team: "kolkata knight riders",
            price: "80lacs"
          },
          {
            playername: "Karun Kaladharan Nair",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/62297.png",
            team: "kolkata knight riders",
            price: "1.2cr"
          }, {
            playername: "Nitish Rana",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63649.png",
            team: "kolkata knight riders",
            price: "90lacs"
          },
          {
            playername: "Rahul Ajay Tripathi",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/41229.png",
            team: "kolkata knight riders",
            price: "90lacs"
          },
          {
            playername: "Shubman Gill",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66818.png",
            team: "kolkata knight riders",
            price: "95lacs"
          },
          {
            playername: "Andre Dwayne Russell",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/12047.png",
            team: "kolkata knight riders",
            price: "86lacs"
          }, {
            playername: "Benjamin Colin James Cutting",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10025.png",
            team: "kolkata knight riders",
            price: "1.3cr"
          }, {
            playername: "Sunil Philip Narine",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11229.png",
            team: "kolkata knight riders",
            price: "2cr"
          },
          {
            playername: "Harbhajan Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/1367.png",
            team: "kolkata knight riders",
            price: "1cr"
          },
          {
            playername: "Varun Chakravarthy Vinod",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67469.png",
            team: "kolkata knight riders",
            price: "1cr"
          },
          {
            playername: "Shivam Pankaj Mavi",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66984.png",
            team: "kolkata knight riders",
            price: "2cr"
          }],
  
        topbatsman: "BRENDON MCCULLUM",
        topbowler: "ANDRE RUSSELL",
        champoinshipwoncount: "2"
      },
  
      {
        id: "3",
        classname: "punjabclass",
        teamname: 'PUNJAB KINGS',
        teamicon: "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg",
        players: [
  
          {
            playername: "Christopher Henry Gayle",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/1201.png",
            team: "punjab kings",
            price: "80lacs"
          },
          {
            playername: "Dawid Johannes Malan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4792.png",
            team: "punjab kings",
            price: "1.2cr"
          },
          {
            playername: "Mandeep Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10114.png",
            team: "punjab kings",
            price: "2.1cr"
          },
          {
            playername: "Mayank Anurag Agarwal",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10115.png",
            team: "punjab kings",
            price: "90lacs"
          },
          {
            playername: "Sarfaraz Naushad Khan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63962.png",
            team: "punjab kings",
            price: "1.2cr"
          },
          {
            playername: "Deepak Jagbir Hooda",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63748.png",
            team: "punjab kings",
            price: "81.45lac"
          },
          {
            playername: "Fabian Anthony Allen",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64253.png",
            team: "punjab kings",
            price: "1.4cr"
          },
          {
            playername: "Jalaj Sahai Saxena",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4544.png",
            team: "punjab kings",
            price: "1.6cr"
          },
          {
            playername: "Moises Constantino Henriques",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4957.png",
            team: "punjab kings",
            price: "1.7cr"
          },
          {
            playername: "Kannaur Lokesh Rahul",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/60122.png",
            team: "punjab kings",
            price: "2.5cr"
          },
          {
            playername: "Nicholas Pooran",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63726.png",
            team: "punjab kings",
            price: "2.0cr"
          },
          {
            playername: "Arshdeep Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67905.png",
            team: "punjab kings",
            price: "1.6cr"
          }],
  
        topbatsman: "KL RAHUL",
        topbowler: "ANKIT RAJPOOT",
        champoinshipwoncount: "NO"
  
      },
      {
        id: "4",
        classname: "mumbaiclass",
        teamname: 'MUMBAI INDIANS',
        teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
        players: [
          {
            playername: "Anmolpreet Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65438.png",
            team: "mumbai indians",
            price: "2.1cr"
          },
          {
            playername: "Christopher Austin Lynn",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10062.png",
            team: "mumbai indians",
            price: "90lac"
          },
          {
            playername: "Rohit Gurunath Sharma",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3852.png",
            team: "mumbai indians",
            price: "1.2cr"
          },
          {
            playername: "Saurabh Sunil Tiwary",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4285.png",
            team: "mumbai indians",
            price: "2.0cr"
          },
          {
            playername: "Suryakumar Ashok Yadav",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11803.png",
            team: "mumbai indians",
            price: "1.2cr"
          },
          {
            playername: "Anukul Sudhakar Roy",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66983.png",
            team: "mumbai indians",
            price: "90lacs"
          },
          {
            playername: "Hardik Himanshu Pandya",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63751.png",
            team: "mumbai indians",
            price: "1.0cr"
          },
          {
            playername: "James Douglas Sheahan Neesham",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10172.png",
            team: "mumbai indians",
            price: "2.2cr"
          },
          {
            playername: "Krunal Himashu Pandya",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63788.png",
            team: "mumbai indians",
            price: "1.72cr"
          },
          {
            playername: "Kieron Adrian Pollard",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3910.png",
            team: "mumbai indians",
            price: "1.9cr"
          },
          {
            playername: "Aditya Prakash Tare",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5435.png",
            team: "mumbai indians",
            price: "90lacs"
          },
          {
            playername: "Ishan Pranav Kumar Pandey Kishan",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64712.png",
            team: "mumbai indians",
            price: "2.1cr"
          },
          {
            playername: "Jasprit Jasbirsingh Bumrah",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63755.png",
            team: "mumbai indians",
            price: "2.0cr"
          }],
  
  
        topbatsman: "SANATH JAYASURIYA",
        topbowler: "ALZARRI JOSEPH",
        champoinshipwoncount: "NO"
  
  
      },
      {
        id: "5",
        classname: "sunrisersclass",
        teamname: 'SUNRISERS HYDERABAD',
        teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
        players: [
  
          {
            playername: "David Andrew Warner",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5380.png",
            team: "sunrisershyderabad",
            price: "90lacs"
          },
  
          {
            playername: "Jason Jonathan Roy",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/33031.png",
            team: "sunrisershyderabad",
            price: "1.0cr"
          },
          {
            playername: "Kane Stuart Williamson",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4330.png",
            team: "sunrisershyderabad",
            price: "1.2cr"
          },
  
          {
            playername: "Kedar Mahadav Jadhav",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4532.png",
            team: "sunrisershyderabad",
            price: "134lacs"
          },
  
          {
            playername: "Manish Krishnanand Pandey",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4276.png",
            team: "sunrisershyderabad",
            price: "2.1cr"
          },
  
          {
            playername: "Abhishek Sharma",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66799.png",
            team: "sunrisershyderabad",
            price: "90.5lacs"
          },
  
          {
            playername: "Mohammad Nabi",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/7797.png",
            team: "sunrisershyderabad",
            price: "2.1cr"
          },
  
          {
            playername: "Basil Thampi",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64782.png",
            team: "sunrisershyderabad",
            price: "98lacs"
          },
  
          {
            playername: "Bhuvneshwar Kumar Singh",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5132.png",
            team: "sunrisershyderabad",
            price: "1.3cr"
          },
  
          {
            playername: "Jagadeesha Suchith",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63714.png",
            team: "sunrisershyderabad",
            price: "2.1cr"
          },
  
  
          {
            playername: "Siddarth Kaul",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61693.png",
            team: "sunrisershyderabad",
            price: "1.0cr"
          }],
  
  
  
        topbatsman: "DAVID WARNER",
        topbowler: "BHUVNESHWAR KUMAR",
        champoinshipwoncount: "1"
      },
  
  
      {
        id: "6",
        classname: "rajasthanclass",
        teamname: 'RAJASTHAN ROYALS',
        teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
        players: [
          {
            playername: "David Andrew Miller",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5313.png",
            team: "Rjasthan royals",
            price: "1.2cr"
          },
          {
            playername: "Manan Vohra",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/60205.png",
            team: "Rjasthan royals",
            price: "90lacs"
          },
          {
            playername: "Riyan Parag",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66939.png",
            team: "Rjasthan royals",
            price: "1.1cr"
          }, {
            playername: "Christopher Henry Morris",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/48816.png",
            team: "Rjasthan royals",
            price: "1.2cr"
          }, {
            playername: "Mahipal Krishan Lomror",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65432.png",
            team: "Rjasthan royals",
            price: "90lacs"
          }, {
            playername: "Rahul Tewatia",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64440.png",
            team: "Rjasthan royals",
            price: "1.2lacs"
          }, {
            playername: "Shivam Dube",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66044.png",
            team: "Rjasthan royals",
            price: "94lacs"
          }, {
            playername: "Shreyas Gopal",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/58155.png",
            team: "Rjasthan royals",
            price: "1.3cr"
          }, {
            playername: "Joseph Charles Buttler",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/9782.png",
            team: "Rjasthan royals",
            price: "1.5cr"
          }, {
            playername: "Chetan Sakariya",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/68173.png",
            team: "Rjasthan royals",
            price: "1.1cr"
          }, {
            playername: "Sanju Viswanath Samson",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61837.png",
            team: "Rjasthan royals",
            price: "2.1cr"
          }, {
            playername: "Konganda Charamanna Cariappa",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65367.png",
            team: "Rjasthan royals",
            price: "2.2cr"
          }, {
            playername: "Jaydev Dipakbhai Unadkat",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5448.png",
            team: "Rjasthan royals",
            price: "1.9cr"
          }, {
            playername: "Mayank Markande",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67126.png",
            team: "Rjasthan royals",
            price: "92lacs"
          }],
        topbatsman: "JOS BUTTLER",
        topbowler: "SOHAIL TANVIR",
        champoinshipwoncount: "1"
  
      },
  
  
  
  
  
      {
        id: "7",
        classname: "royalclass",
        teamname: ' ROYAL CHALLENGERS BANGALORE',
        teamicon: "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg",
        players: [
          {
            playername: "Devdutt Babunu Padikkal",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67589.png",
            team: "royal challegers bangulore",
            price: "90lacs"
          },
          {
            playername: "Pavan Uday Deshpande",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65450.png",
            team: "royal challegers bangulore",
            price: "1.1cr"
          },
          {
            playername: "Sachin Baby",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/55316.png",
            team: "royal challegers bangulore",
            price: "1.1cr"
          }, {
            playername: "Virat Kohli",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3993.png",
            team: "royal challegers bangulore",
            price: "1.2cr"
          }, {
            playername: "Daniel Trevor Christian",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10043.png",
            team: "royal challegers bangulore",
            price: "90.2lacs"
          }, {
            playername: "Daniel Richard Sams",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67859.png",
            team: "royal challegers bangulore",
            price: "1.2cr"
          }, {
            playername: "Glenn James Maxwell",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10085.png",
            team: "royal challegers bangulore",
            price: "98.2lacs"
          }, {
            playername: "Washington Sundar",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65859.png",
            team: "royal challegers bangulore",
            price: "1.0cr"
          }, {
            playername: "Abraham Benjamin de Villiers",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3675.png",
            team: "royal challegers bangulore",
            price: "89.3lacs"
          }, {
            playername: "Mohammed Azharuddeen",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/35833.png",
            team: "royal challegers bangulore",
            price: "92lacs"
          }, {
            playername: "Kona Srikar Bharat",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/60173.png",
            team: "royal challegers bangulore",
            price: "1.2cr"
          }, {
            playername: "Mohammed Siraj",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65799.png",
            team: "royal challegers bangulore",
            price: "97lacs"
          }, {
            playername: "Harshal Vikram Patel",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5407.png",
            team: "royal challegers bangulore",
            price: "2.1cr"
          }, {
            playername: "Mohammed Azharuddeen",
            image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/35833.png",
            team: "royal challegers bangulore",
            price: "1.8cr"
          }],
        topbatsman: "CHRIS GAYLE",
        topbowler: "ANIL KUMBLE",
        champoinshipwoncount: "No"
  
      }]
    var getvalue = JSON.parse(localStorage.getItem('id'))
    for (var i = 0; i < teamdetails.length; i++) {
      if (i == getvalue) {
        renderteam(teamdetails[i])
  
      }
    }
  
  
  
  
    function renderteam(teamdetails) {
  
      const { id, classname, teamname, teamicon, players, topbatsman, topbowler, champoinshipwoncount } = teamdetails
      $(".mainPart").addClass(`${classname}`)
      var topBar = $("<div>").addClass(`topBar`).attr('id', id)
      var logodiv = $("<div>").addClass('logodiv')
      topBar.append(logodiv)
      var teamlogo = $("<img>").attr("src", teamicon).addClass('teamlogo')
      logodiv.append(teamlogo)
      var teamtitle = $("<h1>").addClass('teamtitle').text(teamname)
      topBar.append(teamtitle)
      $(".mainPart").append(topBar)
  
      var pagepart = $("<div>").addClass('pagepart')
      var leftpart = $("<div>").addClass('leftpart')
      pagepart.append(leftpart)
      var grids = $("<div>").addClass('grids')
      var playertext = $("<h1>").addClass("playertext").text("TEAM PLAYRES")
      grids.append(playertext)
      leftpart.append(grids)
      for (var i = 0; i < players.length; i++) {
        var grid = $("<div>").addClass("grid")
        var divimg = $("<div>").addClass('img')
        var image = players[i].image
        var image = $("<img>").addClass("gridlogo").attr("src", players[i].image)
        grid.append(divimg)
        divimg.append(image)
        var setstyle = $("<div>").addClass('setstyle')
        // var playername = players[i].playername
        var person = $("<h3>").addClass('person').text(players[i].playername)
        setstyle.append(person)
  
        grid.append(setstyle)
        grids.append(grid)
        grid.click(function (event) {
          var getres = event.target.innerText
          localStorage.setItem('playername', getres)
          window.location.href = "playerDetails.html"
  
        })
      }
      $('.mainPart').append(pagepart)
  
      var rightpart = $("<div>").addClass('rightpart')
      pagepart.append(rightpart)
      var box = $("<div>").addClass('box')
      rightpart.append(box)
      var h1item1 = $("<h1>").addClass('item').text("Top Batsman")
      var spanitem1 = $('<span>').addClass('topbatsman value').text(topbatsman)
      h1item1.append(spanitem1)
      box.append(h1item1)
      var h1item2 = $("<h1>").addClass('item').text("Top Bowler")
      var spanitem2 = $('<span>').addClass('topbowler value').text(topbowler)
      h1item2.append(spanitem2)
      box.append(h1item2)
      var h1item3 = $("<h1>").addClass('item').text("champion ownership count")
      var spanitem3 = $('<span>').addClass('count value').text(champoinshipwoncount)
      h1item3.append(spanitem3)
      box.append(h1item3)
  
    }
  
  })
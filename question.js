
var questions = [
  {
    numb: 1,
    question: "? Consider Z = X – Y, where X, Y and Z are all in sign-magnitude form. X and Y are each represented in n bits. To avoid overflow, the representation of Z would require a minimum of ",
    answer: "n + 1 bits",
    options: [
      "n + 1 bits",
      "n – 1 bits ",
      "n + 2 bits ",
      "n bits "
    ]
  },
  {
    numb: 2,
    question: "n 16-bit 2’s complement representation, the decimal number -28 is __________. ?",
    answer: "1111 1111 1110 0100 ",
    options: [
      "1000 0000 1110 0100 ",
      "0000 0000 1110 0100 ",
      "1111 1111 1110 0100 ",
      "1111 1111 0001 1100 "
    ]
  },
  {
    numb: 3,
    question: "The 16-bit 2′s complement representation of an integer is 1111 1111 1111 0101; its decimal representation is ",
    answer: "11",
    options: [
      "10",
      "11",
      "15",
      "20"
    ]
  },
  {
    numb: 4,
    question: "The smallest integer that can be represented by an 8-bit number in 2′s complement form is ?",
    answer: "Structured Query Language",
    options: [
      "-256",
      "-128 ",
      "-127",
      "0"
    ]
  },
  {
    numb: 5,
    question: "The minimum number of JK flip-flops required to construct a synchronous counter with the count sequence (0,0,1,1,2,2,3,3,0,0,…) is ",
    answer: "3",
    options: [
      "1",
      "2",
      "4",
      "3"
    ]
  },
  {
    numb: 6,
    question: "Which among these below is not a valid deadlock prevention scheme? ",
    answer: "ARequest and all required resources be allocated before execution",
    options: [
      "Release all resources before requesting a new resource",
      "Number the resources uniquely and never request a lower numbered resource than the last one requested",
      "Never request a resource after releasing any resource",
      "Request and all required resources be allocated before execution"
    ]
  },
   {
    numb: 7,
    question: "Which among these requires a device driver? ",
    answer: "extensible markup language",
    options: [
      "Register",
      "Cache",
      "Main memory",
      "Disk"
    ]
  },
  {
    numb: 8,
    question: "What does GIF stand for",
    answer: "NICE",
    options: [
      "PS",
      "NICE",
      "Init",
      "Kill"
    ]
  },
  {
    numb: 9,
    question: "Which of the following is used to invoke system calls?",
    answer: "A software interrupt",
    options: [
      "An indirect jump",
      "A software interrupt",
      "A privileged instruction",
      "Polling"
    ]
  },
  {
    numb: 10,
    question: "What is dirty bit used to show?",
    answer: "Page that is modified after being loaded into cache memory",
    options: [
      "Page with corrupted data",
      "Wrong page",
      "Page with low frequency occurrence",
      "Page that is modified after being loaded into cache memory"
    ]
  },
  {
    numb: 11,
    question: "What is the protocol data unit (PDU) for the application layer in the Internet stack",
    answere: "message",
    options: [
      "frame",
      "datagram",
      "segment",
      "message"
    ]
  },
   {
   numb: 12,
  question: "Which among this is not a client-server application? ",
  answere: "ping",
  options: [
    "ping",
    "web-browsing",
    "internet Chat",
    "email"
    ]
  },
  {
    numb: 13,
    question: "A firewall is installed at the point where the secure internal network and untrusted external network meet, which is also known as",
    answere: "chock point",
    options: [
      "secure point",
      "meeting point",
      "chock point",
      "firewall point"
      ]
    },
  {
    numb: 14,
    question: "What does DHCP stand for?",
    answere: "dynamic host configuration protocol",
    options: [
      "dynamic host configuration protocol",
      "dynamic host configuration provider",
      "digital host communication provider",
      "digital host communication provider"
      ]
   },
   {
    numb: 15,
    question: "What is the bit rate In Ethernet when Manchester encoding is used",
    answere: "same as the baud rate",
    options: [
      "same as the baud rate",
      "twice the baud rate",
      "half the baud rate",
      "none of these"
      ]
    },

    {
    numb: 16,
    question: "Consider a random variable X that takes values + 1 and-1 with probability 0.5 each. The values of the cumulative distribution function F(x) at x = – 1 and + 1 are ",
    answere: "0.5 and 1",
    options: [
      "0 and 0.5",
      "0 and 1",
      "0.5 and 1",
      "0.25 and 0.75"
      ]
    },
    {
    numb: 17,
    question: "Consider the function f(x) = sin(x) in the interval [π/4, 7π/4]. The number and location(s) of the local minima of this function are ",
    answere: "two, at π/4 and 3π/2",
    options: [
      "two, at π/2 and 3π/2",
      "one, at 3π/2",
      "one, at π/2",
      "two, at π/4 and 3π/2"
      ]
    },

    {
    numb: 18,
    question: "Total number of words formed by 2 vowels and 3 consonants taken from 4 vowels and 5 consonants is equal to",
    answere: "7200",
    options: [
       "60",
       "120",
       "7200",
       "none of these"
      ]
    },
    {
    numb: 19,
    question: "If (G, .) is a group such that (ab)- 1 = a-1b-1, ∀ a, b ∈ G, then G is a/an",
    answere: "abelian group",
    options: [
       "commutative semi group",
       "abelian group",
       "non-abelian group",
       "None of these"
       ]
    },
    {
    numb: 20,
    question: "The function f(x) = x3 - 6x2 + 9x + 25 has",
    answere: "a maxima at x= 1 and a minima at x = 3",
    options: [
      "a maxima at x= 1 and a minima at x = 3",
      "a maxima at x = 3 and a minima at x = 1",
      "no maxima, but a minima at x = 1",
      "a maxima at x = 1, but no minima"
      ]
    },
]

function shuffleQuestions() {
  for (var i = questions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
}

window.onload = function () {
  shuffleQuestions();

};

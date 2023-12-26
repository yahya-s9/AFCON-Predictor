This is a Web application where users can predict their winner for this year's edition of the Africa Cup Of Nations (AFCON) taking place in Cote D'Ivoire. 

The AFCON, is the Football / Soccer championshup for the entire African continent. This will be the 34th edition of the tournament, and 24 teams will be participating.

The first phase of the tournament is known as the "Group Stage" where the 24 teams are split into 6 groups of 4, and all play each other once. Teams get 3 points for a win, 1 point for a draw and 0 points for a loss. Here is group A for example. (1st place in Group A = A1, 2nd place = A2, etc etc)

![Screen Shot 2023-12-26 at 9 54 56 AM](https://github.com/yahya-s9/AFCON-Predictor/assets/54677127/fa3c5ee8-e9dc-4055-9b24-9d22db74157f)

After those 3 games, the top 2 teams from each group automatiacally advance to the next stage, the knockout stage.

The knockout stage starts with 16 teams, which consists of the 12 teams that autoamtically adavanced from the group stage, as well as the 4 best 3rd placed teams. (The 6 3rd placed teams are ranked by their points, goal difference, goals scored, etc): 

![Screen Shot 2023-12-26 at 9 56 17 AM](https://github.com/yahya-s9/AFCON-Predictor/assets/54677127/4fd15ff2-b6b6-42f0-8116-c6bfd0436247)


These 16 teams fill up a single elimination bracket, shrinking to 8 teams in the quarter finals, 4 teams in the semi finals, and 2 teams in the final.

![Screen Shot 2023-12-26 at 9 51 01 AM](https://github.com/yahya-s9/AFCON-Predictor/assets/54677127/a787c257-d443-43fa-810b-4a4376652873)

The problem is, if you wanna sit down and predict how the bracket is going to be populated, it completely depends on the group stage rankings and which 4 of the 6 best 3rd placed teams are advancing. So it becomes really complicated to work it out on paper. Depending on which of the 4 best 3rd placed teams qualify, the bracket can be populated 15 different ways.

![Screen Shot 2023-12-26 at 9 57 32 AM](https://github.com/yahya-s9/AFCON-Predictor/assets/54677127/2e508730-68fd-4718-b7c9-40ffdf71978a)

So that was my motivation for this web app! The goal is to be able to sort the groups into your predicted ranking (drag and drop) and then sort the 3rd placed teams, then finally populate the round of 16 bracket automatically.


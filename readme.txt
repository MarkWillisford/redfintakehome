Good evening, thank you for taking a few minutes to evaluate my code.
The installation of dependencies is simple.
First Node:
For Mac, 
	Nodejs.org and find your download link (LTS version)
	Find the downloaded file and double click
	In your terminal you can enter node - v to verify that Node.js is installed correctly
For Linux
	In your terminal enter sudo apt install nodejs
	As before node -v will let you know that it has installed correctly
Once you have npm / Node.js installed you need two libraries installed with the following commands:
	npm i axios
	npm i moment
And finally, unzip and install my program the following command from the project folder:
	npm install -g 
The program can be ran with: 
	letseat 



I would like to start by thanking you for the opportunity to prepare this code for your review. If I were to continue to expand this proof of concept application into a fully-featured web app I would start with the MERN stack, of course taking advantage of the required API. I would use GitHub and Jenkins CI/CD to Dockerize the app for automatic testing and flow control. This would allow me to build, test, and deploy complete packages that have all libraries and dependencies in one container. I could even set up dynamic deployment or schedule jobs to increase efficiency. That being said, I have been looking for the opportunity to play with the idea of separating out each piece of the app into different containers and turning it into a sort of microservices architecture. This might be a good place to explore that. 
I would use Kubernetes as a container management system. Beyond the obvious fact that it has a dominating market presence, it will offer me auto-scaling, monitoring of containers, controlling replication of pods and containers, load balancing, automated rollouts, etc. 
Finally deployment; for this part, I would use Amazon EC2 service for automatic elasticity. 

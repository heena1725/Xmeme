echo "
----------------------
  NODE & NPM
----------------------
"

# add nodejs 10 ppa (personal package archive) from nodesource
# sudo apt update 
sudo apt install -y nodejs
sudo apt install -y npm

echo " " 

cd frontendXmeme/
npm install

cd ..

cd backendXmeme/
npm install 

cd ..


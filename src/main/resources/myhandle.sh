#! /bin/bash
name=skrtu-1.0.0
branch=master


updategit(){
git checkout ${branch}
git pull
echo "git update success!!"
}

updatemvn(){
mvn clean package
echo "maven update success!!"
}

startjar(){
nohup java -jar ./${name}.jar > ${name}.nohup 2>&1 &
tail -222f ${name}.nohup
}

stopjar(){
kill -9 `ps -ef | grep ${name}.jar |grep -v grep| awk '{print $2}'`
echo "stop ${name} success!!"
}

if [[ $1 == "1" ]]
	then
	cd skrtuweb
	updategit
elif [[ $1 == "2" ]]
	then
	cd skrtu
	updategit
	updatemvn
	stopjar
	cd target
	startjar
else
	echo "1---->update web"
	echo "2----> update jar"
fi

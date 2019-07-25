#include<iostream>
using namespace std;

struct Student{
	string name;
	int age;
};
int main(){
	
	struct Student stu[3] = {
		{
			"aaa",1111
		},
		{
			"bbb",22
		}
	};
	
	cout<<stu[0].name<<"----"<<stu[1].age<<endl;
	
//	Student st1{ "one",111 };
//	Student st2{ "two",2222 };
//	
//	struct Student *p;
//	p = &st1;
//	
//	cout<<p->name<<(*p).age<<endl;
	
	
	//stu1.name = "abc";
	//stu1.age = 11;
	

//	stu2 = stu1;
//	cout<<"stu1.name---"<<stu1.name<<"----age----"<<stu2.name;
	
} 

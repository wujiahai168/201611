#include<iostream>
using namespace std;

class Test{
	public:
		Test(){
			cout<<"---test---"<<endl;
		}
		~Test(){
			cout<<"---over---"<<endl; 
		}
};

int main(){
	Test t;
} 

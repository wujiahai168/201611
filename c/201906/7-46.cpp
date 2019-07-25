#include<iostream>
#include<stdio.h>
#include<string.h>
using namespace std;

char *max( char *a, char *b ){
	if( strcmp(a,b)>=0 ){
		return a;
		
	}else{
		return b;
	}
}

int main(){
	char *p[] = {"aaa","bdasfas","dadsa"};
	char *str = p[0];
	
	for (int i=1; i<3; i++){
		str = max( str,p[i] );
		
	}
	cout<<"max---"<<endl;
	puts(str);	
	
}

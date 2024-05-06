&Example:
All S is P;
All P is M;
Therefore[Example] All S is P? //True, False, Unknown

&People:
All S is M;
No M is P;
@Therefore All S is M? //True, False, Unknown

//: @ doesnt need to resay [People]

&Houses:
Some S is M;
No M is P;
Therefore[Houses] No M is S? //True, False, Unknown

&Bottle:
All A is P;
No P is S;
Some P is not B;
Sono B is not S;
@Therefore Sono P is S? //True, False, Unknown


&Tissue Valid<True, False>:
All S is P;
Sono M is P;
@Therefore Sono S is M?


ADD THEREFORE LOGIC TMR...

// All people are happy;
//     Logic.people ||= { all: [], some: [], no: [], sone: [] };
//     Logic.people.all.push('happy');
//     Logic.people.some.push('happy');

//     Logic.happy ||= { all: [], some: [], no: [], sone: [] };
//     Logic.happy.some.push('people');
// No happy is sad;
//     Logic.happy ||= { all: [], some: [], no: [], sone: [] };
//     Logic.happy.all.map(v => v.no.push('sad'))
//     Logic.happy.no.push('sad');
//     Logic.happy.sone.push('sad');

//     Logic.sad ||= {  all: [], some: [], no: [], sone: [] };
//     Logic.sad.all.map(v => v.no.push(''))
//     Logic.sad.no.push('happy');


All people are happy;
    Logic.people ||= 1;
    Logic.people *= 3;
    Logic.happy ||= 1;
    Logic.happy *= 5;
    Logic.happy *= Logic.people;

No happy is sad;
    Logic.sad ||= 1;
    Logic.sad *= 11;

Therefore No people is sad? //!True

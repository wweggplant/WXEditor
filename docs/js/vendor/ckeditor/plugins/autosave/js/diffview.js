/***
This is part of jsdifflib v1.0. <http://snowtide.com/jsdifflib>

Copyright (c) 2007, Snowtide Informatics Systems, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

	* Redistributions of source code must retain the above copyright notice, this
		list of conditions and the following disclaimer.
	* Redistributions in binary form must reproduce the above copyright notice,
		this list of conditions and the following disclaimer in the documentation
		and/or other materials provided with the distribution.
	* Neither the name of the Snowtide Informatics Systems nor the names of its
		contributors may be used to endorse or promote products derived from this
		software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
***/

diffview={buildView:function(e){function t(e,t){var n=document.createElement(e);return n.className=t,n}function n(e,t){var n=document.createElement(e);return n.appendChild(document.createTextNode(t)),n}function d(e,t,n){var d=document.createElement(e);return d.className=t,d.innerHTML=n,d}function a(e,a,i,l,r){return i>a?(e.appendChild(n("th",(a+1).toString())),e.appendChild(d("td",r,l[a].replace(/\t/g,"    "))),a+1):(e.appendChild(document.createElement("th")),e.appendChild(t("td","empty")),a)}function i(e,t,a,i,l){e.appendChild(n("th",null==t?"":(t+1).toString())),e.appendChild(n("th",null==a?"":(a+1).toString())),e.appendChild(d("td",l,i[null!=t?t:a].replace(/\t/g,"    ")))}var l=e.baseTextLines,r=e.newTextLines,h=e.opcodes,c=e.baseTextName?e.baseTextName:"Base Text",p=e.newTextName?e.newTextName:"New Text",o=e.contextSize,u=0==e.viewType||1==e.viewType?e.viewType:0;if(null==l)throw"Cannot build diff view; baseTextLines is not defined.";if(null==r)throw"Cannot build diff view; newTextLines is not defined.";if(!h)throw"Canno build diff view; opcodes is not defined.";var f=document.createElement("thead"),s=document.createElement("tr");f.appendChild(s),u?(s.appendChild(document.createElement("th")),s.appendChild(document.createElement("th")),s.appendChild(d("th","texttitle",c+" vs. "+p))):(s.appendChild(document.createElement("th")),s.appendChild(d("th","texttitle",c)),s.appendChild(document.createElement("th")),s.appendChild(d("th","texttitle",p))),f=[f];for(var m,g=[],C=0;C<h.length;C++){code=h[C],change=code[0];for(var v=code[1],b=code[2],w=code[3],x=code[4],T=Math.max(b-v,x-w),E=[],N=[],y=0;T>y;y++){if(o&&h.length>1&&(C>0&&y==o||0==C&&0==y)&&"equal"==change){var j=T-(0==C?1:2)*o;if(j>1){if(E.push(s=document.createElement("tr")),v+=j,w+=j,y+=j-1,s.appendChild(n("th","...")),u||s.appendChild(d("td","skip","")),s.appendChild(n("th","...")),s.appendChild(d("td","skip","")),C+1==h.length)break;continue}}if(E.push(s=document.createElement("tr")),u)"insert"==change?i(s,null,w++,r,change):"replace"==change?(N.push(m=document.createElement("tr")),b>v&&i(s,v++,null,l,"delete"),x>w&&i(m,null,w++,r,"insert")):"delete"==change?i(s,v++,null,l,change):i(s,v++,w++,l,change);else{var L=diffString2(b>v?l[v]:"",x>w?r[w]:"");b>v&&(l[v]=L.o),x>w&&(r[w]=L.n),v=a(s,v,b,l,"replace"==change?"delete":change),w=a(s,w,x,r,"replace"==change?"insert":change)}}for(var y=0;y<E.length;y++)g.push(E[y]);for(var y=0;y<N.length;y++)g.push(N[y])}var S="combined <a href='http://snowtide.com/jsdifflib'>jsdifflib</a> ";S+="and John Resig's <a href='http://ejohn.org/projects/javascript-diff-algorithm/'>diff</a> ",S+="by <a href='http://richardbondi.net'>Richard Bondi</a>",g.push(s=d("th","author",S)),s.setAttribute("colspan",u?3:4),f.push(s=document.createElement("tbody"));for(var C in g)s.appendChild(g[C]);s=t("table","diff"+(u?" inlinediff":""));for(var C in f)s.appendChild(f[C]);return s}};
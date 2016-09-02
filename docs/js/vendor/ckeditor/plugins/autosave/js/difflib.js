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

__whitespace={" ":!0,"	":!0,"\n":!0,"\f":!0,"\r":!0},difflib={defaultJunkFunction:function(t){return t in __whitespace},stripLinebreaks:function(t){return t.replace(/^[\n\r]*|[\n\r]*$/g,"")},stringAsLines:function(t){for(var i=t.indexOf("\n"),n=t.indexOf("\r"),e=i>-1&&n>-1||0>n?"\n":"\r",s=t.split(e),h=0;h<s.length;h++)s[h]=difflib.stripLinebreaks(s[h]);return s},__reduce:function(t,i,n){if(null!=n)var e=n,s=0;else{if(!i)return null;var e=i[0],s=1}for(;s<i.length;s++)e=t(e,i[s]);return e},__ntuplecomp:function(t,i){for(var n=Math.max(t.length,i.length),e=0;n>e;e++){if(t[e]<i[e])return-1;if(t[e]>i[e])return 1}return t.length==i.length?0:t.length<i.length?-1:1},__calculate_ratio:function(t,i){return i?2*t/i:1},__isindict:function(t){return function(i){return i in t}},__dictget:function(t,i,n){return i in t?t[i]:n},SequenceMatcher:function(t,i,n){this.set_seqs=function(t,i){this.set_seq1(t),this.set_seq2(i)},this.set_seq1=function(t){t!=this.a&&(this.a=t,this.matching_blocks=this.opcodes=null)},this.set_seq2=function(t){t!=this.b&&(this.b=t,this.matching_blocks=this.opcodes=this.fullbcount=null,this.__chain_b())},this.__chain_b=function(){for(var t=this.b,i=t.length,n=this.b2j={},e={},s=0;s<t.length;s++){var h=t[s];if(h in n){var r=n[h];i>=200&&100*r.length>i?(e[h]=1,delete n[h]):r.push(s)}else n[h]=[s]}for(var h in e)delete n[h];var l=this.isjunk,u={};if(l){for(var h in e)l(h)&&(u[h]=1,delete e[h]);for(var h in n)l(h)&&(u[h]=1,delete n[h])}this.isbjunk=difflib.__isindict(u),this.isbpopular=difflib.__isindict(e)},this.find_longest_match=function(t,i,n,e){for(var s=this.a,h=this.b,r=this.b2j,l=this.isbjunk,u=t,a=n,c=0,o=null,f={},_=[],b=t;i>b;b++){var g={},d=difflib.__dictget(r,s[b],_);for(var p in d)if(o=d[p],!(n>o)){if(o>=e)break;g[o]=k=difflib.__dictget(f,o-1,0)+1,k>c&&(u=b-k+1,a=o-k+1,c=k)}f=g}for(;u>t&&a>n&&!l(h[a-1])&&s[u-1]==h[a-1];)u--,a--,c++;for(;i>u+c&&e>a+c&&!l(h[a+c])&&s[u+c]==h[a+c];)c++;for(;u>t&&a>n&&l(h[a-1])&&s[u-1]==h[a-1];)u--,a--,c++;for(;i>u+c&&e>a+c&&l(h[a+c])&&s[u+c]==h[a+c];)c++;return[u,a,c]},this.get_matching_blocks=function(){if(null!=this.matching_blocks)return this.matching_blocks;for(var t,i,n,e,s,h,r,l,u,a=this.a.length,c=this.b.length,o=[[0,a,0,c]],f=[];o.length;)s=o.pop(),t=s[0],i=s[1],n=s[2],e=s[3],u=this.find_longest_match(t,i,n,e),h=u[0],r=u[1],l=u[2],l&&(f.push(u),h>t&&r>n&&o.push([t,h,n,r]),i>h+l&&e>r+l&&o.push([h+l,i,r+l,e]));f.sort(difflib.__ntuplecomp);var _=j1=k1=block=0,b=[];for(var g in f)block=f[g],i2=block[0],j2=block[1],k2=block[2],_+k1==i2&&j1+k1==j2?k1+=k2:(k1&&b.push([_,j1,k1]),_=i2,j1=j2,k1=k2);return k1&&b.push([_,j1,k1]),b.push([a,c,0]),this.matching_blocks=b,this.matching_blocks},this.get_opcodes=function(){if(null!=this.opcodes)return this.opcodes;var t=0,i=0,n=[];this.opcodes=n;var e,s,h,r,l,u=this.get_matching_blocks();for(var a in u)e=u[a],s=e[0],h=e[1],r=e[2],l="",s>t&&h>i?l="replace":s>t?l="delete":h>i&&(l="insert"),l&&n.push([l,t,s,i,h]),t=s+r,i=h+r,r&&n.push(["equal",s,t,h,i]);return n},this.get_grouped_opcodes=function(t){t||(t=3);var i=this.get_opcodes();i||(i=[["equal",0,1,0,1]]);var n,e,s,h,r,l;"equal"==i[0][0]&&(n=i[0],e=n[0],s=n[1],h=n[2],r=n[3],l=n[4],i[0]=[e,Math.max(s,h-t),h,Math.max(r,l-t),l]),"equal"==i[i.length-1][0]&&(n=i[i.length-1],e=n[0],s=n[1],h=n[2],r=n[3],l=n[4],i[i.length-1]=[e,s,Math.min(h,s+t),r,Math.min(l,r+t)]);var u=t+t,a=[];for(var c in i)n=i[c],e=n[0],s=n[1],h=n[2],r=n[3],l=n[4],"equal"==e&&h-s>u&&(a.push([e,s,Math.min(h,s+t),r,Math.min(l,r+t)]),s=Math.max(s,h-t),r=Math.max(r,l-t)),a.push([e,s,h,r,l]);return a&&"equal"==a[a.length-1][0]&&a.pop(),a},this.ratio=function(){return matches=difflib.__reduce(function(t,i){return t+i[i.length-1]},this.get_matching_blocks(),0),difflib.__calculate_ratio(matches,this.a.length+this.b.length)},this.quick_ratio=function(){var t,i;if(null==this.fullbcount){this.fullbcount=t={};for(var n=0;n<this.b.length;n++)i=this.b[n],t[i]=difflib.__dictget(t,i,0)+1}t=this.fullbcount;for(var e={},s=difflib.__isindict(e),h=numb=0,n=0;n<this.a.length;n++)i=this.a[n],s(i)?numb=e[i]:numb=difflib.__dictget(t,i,0),e[i]=numb-1,numb>0&&h++;return difflib.__calculate_ratio(h,this.a.length+this.b.length)},this.real_quick_ratio=function(){var t=this.a.length,i=this.b.length;return _calculate_ratio(Math.min(t,i),t+i)},this.isjunk=n?n:difflib.defaultJunkFunction,this.a=this.b=null,this.set_seqs(t,i)}};
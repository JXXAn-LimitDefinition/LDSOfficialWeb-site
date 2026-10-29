import{n as e,t}from"./content-BFHHUk38.js";import{C as n,D as r,E as i,O as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,k as _,l as ee,m as te,n as v,o as y,p as ne,r as b,s as re,t as ie,u as x,v as S,w as C,x as ae,y as oe}from"./three-D2C39iCp.js";function se(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ce(e){return e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-i[0]*n[1]},0)/2}function le(e,t,n=24,r=7819){if(!(e>0&&t>0&&Number.isFinite(e)&&Number.isFinite(t)))throw RangeError(`Positive finite dimensions required.`);if(!Number.isInteger(n)||n<1||n>256||!Number.isFinite(r))throw RangeError(`Cell count must be 1..256 and seed finite.`);let i=se(r),a=Math.max(1,Math.round(Math.sqrt(n*e/t))),o=1/0;for(let r=1;r<=n;r++)if(n%r===0){let i=Math.abs(Math.log(r/(n/r)/(e/t)));i<o&&(o=i,i<.8&&(a=r))}let s=Math.ceil(n/a),c=Array.from({length:n},(n,r)=>[((r%a+.5+(i()-.5)*.68)/a-.5)*e,((Math.floor(r/a)+.5+(i()-.5)*.68)/s-.5)*t]),l=1e10/Math.max(e,t),u=new Map,d=n=>{let r=Math.round(n[0]*l)/l,i=Math.round(n[1]*l)/l;Math.abs(r-e/2)<1e-8&&(r=e/2),Math.abs(r+e/2)<1e-8&&(r=-e/2),Math.abs(i-t/2)<1e-8&&(i=t/2),Math.abs(i+t/2)<1e-8&&(i=-t/2);let a=`${r},${i}`,o=u.get(a);return o||(o=[r,i],u.set(a,o)),o};return c.map((n,r)=>{let i=[[-e/2,-t/2],[e/2,-t/2],[e/2,t/2],[-e/2,t/2]];c.forEach((e,t)=>{if(t===r)return;let a=e[0]-n[0],o=e[1]-n[1],s=(e[0]**2+e[1]**2-n[0]**2-n[1]**2)/2,c=[];i.forEach((e,t)=>{let n=i[(t+1)%i.length],r=e[0]*a+e[1]*o-s,l=n[0]*a+n[1]*o-s;if(r<=1e-12&&c.push(e),r<0&&l>0||r>0&&l<0){let t=r/(r-l);c.push([e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t])}}),i=c});let a=i.map(d).filter((e,t,n)=>t===0||e!==n[t-1]);a[0]===a.at(-1)&&a.pop();let o=ce(a)*2,s=0,l=0;return a.forEach((e,t)=>{let n=a[(t+1)%a.length],r=e[0]*n[1]-n[0]*e[1];s+=(e[0]+n[0])*r,l+=(e[1]+n[1])*r}),{vertices:a,uv:a.map(n=>[(n[0]+e/2)/e,(n[1]+t/2)/t]),center:[s/(3*o),l/(3*o)],boundary:a.map((n,r)=>{let i=a[(r+1)%a.length];return n[0]===i[0]&&Math.abs(n[0])===e/2||n[1]===i[1]&&Math.abs(n[1])===t/2})}})}function w(e,t){let n=e.map((n,r)=>{let i=e[(r+1)%e.length],a=i[0]-n[0],o=i[1]-n[1],s=Math.hypot(a,o),c=-o/s,l=a/s;return[c,l,c*n[0]+l*n[1]+t[r]]});return e.map((e,t)=>{let r=n[(t+n.length-1)%n.length],i=n[t],a=r[0]*i[1]-i[0]*r[1];return Math.abs(a)<1e-9?e:[(r[2]*i[1]-i[2]*r[1])/a,(r[0]*i[2]-i[0]*r[2])/a]})}function ue(e,t=.14,n=.02){if(!(Number.isFinite(t)&&t>0&&Number.isFinite(n)&&n>0&&n<t/2))throw RangeError(`Bevel must be positive and smaller than half the thickness.`);if(e.vertices.length<3||ce(e.vertices)<=0||e.uv.length!==e.vertices.length||e.boundary.length!==e.vertices.length)throw RangeError(`A convex CCW cell is required.`);e.vertices.forEach((t,n)=>{let r=e.vertices[(n+1)%e.vertices.length],i=e.vertices[(n+2)%e.vertices.length];if(![...t,...e.uv[n]].every(Number.isFinite)||Math.hypot(r[0]-t[0],r[1]-t[1])<1e-10||(r[0]-t[0])*(i[1]-r[1])-(r[1]-t[1])*(i[0]-r[0])<-1e-10)throw RangeError(`A convex CCW cell is required.`)});let r=w(e.vertices,e.vertices.map(()=>n)),i=w(e.vertices,e.boundary.map(e=>e?-n:0)),a=[],o=(a,o,s)=>{let c=o===`face`?r[a]:e.vertices[a],l=o===`face`?e.vertices[a]:i[a],u=(s?1:-1)*(t/2-(o===`body`?n:0));return{point:[c[0],c[1],u],target:[l[0],l[1],u],uv:e.uv[a]}},s=(e,t,n,r,i=!1)=>{let o=e.point.map((e,n)=>t.point[n]-e),s=e.point.map((e,t)=>n.point[t]-e),c=[o[1]*s[2]-o[2]*s[1],o[2]*s[0]-o[0]*s[2],o[0]*s[1]-o[1]*s[0]],l=Math.hypot(...c);l<1e-12||a.push({corners:[e,t,n],normal:c.map(e=>e/l),surface:r,internal:i})};for(let t=1;t<e.vertices.length-1;t++)s(o(0,`face`,!0),o(t,`face`,!0),o(t+1,`face`,!0),`front`),s(o(0,`face`,!1),o(t+1,`face`,!1),o(t,`face`,!1),`back`);for(let t=0;t<e.vertices.length;t++){let n=(t+1)%e.vertices.length,r=!e.boundary[t],i=o(t,`face`,!0),a=o(n,`face`,!0),c=o(t,`body`,!0),l=o(n,`body`,!0),u=o(t,`face`,!1),d=o(n,`face`,!1),f=o(t,`body`,!1),p=o(n,`body`,!1);s(i,c,l,`bevel`,r),s(i,l,a,`bevel`,r),s(c,f,p,`wall`,r),s(c,p,l,`wall`,r),s(f,u,d,`bevel`,r),s(f,d,p,`bevel`,r)}return a}function de(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function fe(e,t,n,r,i,a,o){if(!a)return{x:0,y:0,angle:0};let s=e-n,c=t-r,l=Math.hypot(s,c),u=(1-de(l,.18,1.22))*(1-de(i,.8,1));if(u<=0)return{x:0,y:0,angle:0};let d=l>.001?s/l:Math.cos(o),f=l>.001?c/l:Math.sin(o);return{x:d*.13*u,y:f*.13*u,angle:Math.sin(o+d)*.032*u}}function pe(e){return 1-de(e,.8,1)*.5}function me(e){let t=e?1050:2600,n=se(682741),r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t*3),o=new Float32Array(t);for(let e=0;e<t;e++){let t=e%40,s=t===0?2:+(t<8),c=(n()-.5)*2.35,l=(n()-.5)*2.3;s===2&&Math.abs(c)<.72&&Math.abs(l)<.74&&(c=(c<0?-1:1)*(.76+n()*.3));let u=s===2?1+n()*5.5:s===1?-9-n()*37:-48-n()*95;r.set([c,l,u],e*3),o[e]=s;let d=s===1&&n()>.974;i[e]=s===2?1.5+n()*2.3:s===1?d?3.4+n()*1.2:1+n()*1.15:.55+n()*.65;let f=s===2?.17+n()*.24:s===1?.28+n()*.46:.1+n()*.3,p=n()>.92;a.set(p?[f,f*.86,f*.79]:[f*.85,f*.93,f],e*3)}return{positions:r,sizes:i,colors:a,layers:o,count:t}}var he=6,ge=.12,_e=[{x:-.89,y:.48,z:6.2,size:.11,rx:-.19,ry:.43,rz:-.32},{x:.9,y:.13,z:5.3,size:.078,rx:-.28,ry:-.72,rz:.47},{x:-1.06,y:-.25,z:7.1,size:.145,rx:.32,ry:.58,rz:.19},{x:.83,y:.66,z:6.8,size:.055,rx:-.36,ry:-.52,rz:-.61},{x:-.88,y:.01,z:5,size:.043,rx:.22,ry:.75,rz:.71},{x:1.06,y:-.37,z:5.8,size:.12,rx:-.3,ry:-.67,rz:-.28}],ve=`
  attribute float aShard;attribute float aSurface;
  uniform mat4 uTransforms[6];
  varying vec3 vNormal;varying vec3 vWorld;varying vec3 vView;varying float vSurface;
  void main(){
    mat4 transform=uTransforms[int(aShard)];
    vec4 world=modelMatrix*transform*vec4(position,1.);
    // Retain clear near-field parallax without letting an edge shard cross the reading area.
    world.xy+=cameraPosition.xy*.42;
    vec4 view=viewMatrix*world;
    vWorld=world.xyz;vView=view.xyz;
    vNormal=normalize(mat3(modelMatrix)*mat3(transform)*normal);
    vSurface=aSurface;
    gl_Position=projectionMatrix*view;
  }
`,T=`
  uniform sampler2D uBackground;
  uniform vec2 uResolution;
  uniform float uStrength;
  uniform float uLowQuality;
  varying vec3 vNormal;varying vec3 vWorld;varying vec3 vView;varying float vSurface;
  vec3 reflectionField(vec3 r){
    float broad=pow(max(dot(r,normalize(vec3(-.5,.65,.62))),0.),8.);
    float band=exp(-pow((r.y-.35)*13.,2.))*exp(-pow((r.x+.05)*1.45,2.));
    float side=exp(-pow((r.x-.57)*9.,2.))*exp(-pow((r.y+.15)*1.4,2.));
    float red=exp(-pow((r.x+.73)*19.,2.))*exp(-pow((r.y+.09)*8.,2.));
    return vec3(.003,.005,.007)+vec3(.19,.23,.25)*broad+vec3(.82,.91,.95)*band+vec3(.17,.21,.23)*side+vec3(.11,.003,.002)*red;
  }
  void main(){
    vec3 N=normalize(vNormal);if(!gl_FrontFacing)N=-N;
    vec3 V=normalize(cameraPosition-vWorld);
    float facing=max(dot(N,V),0.);
    float fresnel=.04+.96*pow(1.-facing,5.);
    vec3 incident=normalize(vView),viewNormal=normalize(mat3(viewMatrix)*N);
    vec3 through=refract(incident,viewNormal,1./1.5);
    vec2 offset=(through.xy/max(abs(through.z),.3)-incident.xy/max(abs(incident.z),.3))*.010;
    vec2 screen=gl_FragCoord.xy/uResolution;
    vec3 transmitted=texture2D(uBackground,clamp(screen+offset,vec2(.001),vec2(.999))).rgb;
    if(uLowQuality<.5){
      transmitted.r=texture2D(uBackground,clamp(screen+offset*1.04,vec2(.001),vec2(.999))).r;
      transmitted.b=texture2D(uBackground,clamp(screen+offset*.97,vec2(.001),vec2(.999))).b;
    }
    float edge=step(1.5,vSurface),wall=step(2.5,vSurface);
    transmitted*=mix(vec3(.985,.995,1.),vec3(.77,.96,.92),wall);
    vec3 reflected=reflectionField(reflect(-V,N));
    vec3 color=mix(transmitted,reflected,min(.84,fresnel*.78+edge*.12));
    color+=vec3(.014,.022,.025)*edge*(.45+fresnel);
    float opacity=mix(.73,.95,edge)*uStrength;
    gl_FragColor=vec4(color,opacity);
    #include <colorspace_fragment>
  }
`;function ye(e){let t=le(3.6,2.5,he,43179),n=[],i=[],o=[],s=[],c=[];t.forEach((e,t)=>{let r=Math.max(...e.vertices.map(e=>e[1]))-Math.min(...e.vertices.map(e=>e[1])),a=e.vertices.map(t=>[(t[0]-e.center[0])/r,(t[1]-e.center[1])/r]),l={vertices:a,center:[0,0],uv:e.uv,boundary:a.map(()=>!0)},u=n.length/3;for(let e of ue(l,ge,.016)){let r={front:1,back:0,bevel:2,wall:3}[e.surface];for(let a of e.corners)n.push(...a.point),i.push(...e.normal),o.push(t),s.push(r)}c.push({start:u,count:n.length/3-u})});let u=new b;u.setAttribute(`position`,new y(n,3)),u.setAttribute(`normal`,new y(i,3)),u.setAttribute(`aShard`,new y(o,1)),u.setAttribute(`aSurface`,new y(s,1));let d=Array.from({length:he},()=>new p),m={uBackground:{value:e},uResolution:{value:new r(1,1)},uStrength:{value:1},uLowQuality:{value:0},uTransforms:{value:d}},h=new C({uniforms:m,vertexShader:ve,fragmentShader:T,side:2,transparent:!0,depthWrite:!1,toneMapped:!1});h.forceSinglePass=!0;let g=new ne(u,h);g.frustumCulled=!1;let _=new re;_.name=`foreground-spacetime-glass`,_.add(g);let ee=new a,te=new a,v=new l,ie=new S,x=he,ae=!1;return{group:_,get count(){return x},update(e){if(ae)return;x=e.mobile?3:he;let t=f.clamp(e.strength,0,1),n=e.motion?e.time:0,r=.55+.45*t;m.uStrength.value=.18+.82*t,m.uLowQuality.value=e.mobile||e.lowQuality?1:0,m.uResolution.value.set(Math.max(1,e.width*e.pixelRatio),Math.max(1,e.height*e.pixelRatio)),u.setDrawRange(0,c[x-1].start+c[x-1].count),_e.forEach((t,i)=>{let a=Math.max(1.7,e.cameraZ-t.z)*Math.tan(f.degToRad(39/2)),o=Math.max(.3,e.aspect),s=i*2.39,c=Math.sin(n*.09+s)*.011,l=Math.sin(n*.115+s)*.014,u=e.mobile?1.08:1;ee.set((t.x*u+c)*a*o,(t.y+l)*a,t.z),v.set(t.rx+Math.sin(n*.07+s)*.045,t.ry+Math.sin(n*.095+s)*.055,t.rz+Math.sin(n*.08+s)*.04),ie.setFromEuler(v);let p=a*2*t.size*r*(e.mobile?.62:1);te.setScalar(p),d[i].compose(ee,ie,te)})},dispose(){ae||(ae=!0,u.dispose(),h.dispose(),_.clear())}}}var E=24,be=7,D=(e,t,n)=>Math.max(t,Math.min(n,e));function xe(e=112,t=72){if(!Number.isInteger(e)||!Number.isInteger(t)||e<16||t<16||e>256||t>256)throw RangeError(`Wake dimensions must be integers between 16 and 256.`);let n=new Float32Array(e*t*4),r=new Uint8Array(n.length),i=new Float32Array(168),a=0,o=!1,s=0,c=0,l=0,u=0,d=0,f=()=>{for(let e=0;e<r.length;e+=4)r[e]=r[e+1]=128,r[e+2]=r[e+3]=0};f();function p(){let e=d>0;return n.fill(0),f(),a=0,o=!1,d=0,e}function m(e){return!Number.isFinite(e)||e<=0?(p(),!1):(u&&Math.abs(u-e)>1e-4&&p(),u=e,!0)}return{width:e,height:t,data:r,get strength(){return d},get active(){return d>0||a>0},clear:p,move(e,t,n,r){if(![e,t,n].every(Number.isFinite)||!m(r)){p();return}e=D(e,-1,1)*r,t=D(t,-1,1);let u=n-l;if(!o||u<=0||u>.4){o=!0,s=e,c=t,l=n;return}let d=Math.hypot(e-s,t-c);if(d<.0015)return;let f=D(d/Math.max(.008,u)/5,0,1),h=.12+.075*f,g=.32+.68*Math.sqrt(f),_=Math.min(a,23)*be;a<E&&(i[_]=s,i[_+1]=c,a++),i[_+2]=e,i[_+3]=t,i[_+4]=h,i[_+5]=g,i[_+6]=d,s=e,c=t,l=n},update(o,s,c){if(!s||!Number.isFinite(c)||c<=0)return p();let l=u>0&&Math.abs(u-c)>1e-4&&d>0;if(m(c),!d&&!a)return!!l;o=Number.isFinite(o)?D(o,0,.08):0;let f=Math.exp(-o*2.9),h=Math.exp(-o*3.3);for(let e=0;e<n.length;e+=4)n[e]*=f,n[e+1]*=f,n[e+2]*=f,n[e+3]*=h;for(let r=0;r<a;r++){let a=r*be,o=i[a],s=i[a+1],l=i[a+2],u=i[a+3],d=l-o,f=u-s,p=Math.hypot(d,f);if(p<1e-4)continue;let m=i[a+4],h=i[a+5],g=d/p,_=f/p,ee=-_,te=g,v=Math.min(.75,p/m*.8)*h,y=Math.max(0,Math.floor(((Math.min(o,l)-m)/c+1)*.5*e)),ne=Math.min(e-1,Math.ceil(((Math.max(o,l)+m)/c+1)*.5*e)),b=Math.max(0,Math.floor((Math.min(s,u)-m+1)*.5*t)),re=Math.min(t-1,Math.ceil((Math.max(s,u)+m+1)*.5*t));for(let r=b;r<=re;r++)for(let i=y;i<=ne;i++){let a=((i+.5)/e*2-1)*c,l=(r+.5)/t*2-1,u=D(((a-o)*d+(l-s)*f)/(p*p),0,1),y=a-o-d*u,ne=l-s-f*u,b=Math.hypot(y,ne)/m;if(b>=1)continue;let re=y*ee+ne*te,ie=re/Math.max(Math.abs(re),m*.14),x=(1-b*b)**2,S=Math.exp(-(((b-.57)/.23)**2))*(1-b)*2,C=(r*e+i)*4;n[C]+=ee*ie*x*v+g*x*v*.13,n[C+1]+=te*ie*x*v+_*x*v*.13;let ae=Math.hypot(n[C],n[C+1]);ae>.98&&(n[C]*=.98/ae,n[C+1]*=.98/ae),n[C+2]=Math.max(n[C+2],Math.min(1,x*h)),n[C+3]=Math.max(n[C+3],Math.min(1,S*h))}}a=0,d=0;let g=!!l;for(let e=0;e<n.length;e+=4){for(let t=0;t<4;t++)Math.abs(n[e+t])<1/255&&(n[e+t]=0);let t=128+Math.round(n[e]*127),i=128+Math.round(n[e+1]*127),a=Math.round(n[e+2]*255),o=Math.round(n[e+3]*255);(r[e]!==t||r[e+1]!==i||r[e+2]!==a||r[e+3]!==o)&&(g=!0),r[e]=t,r[e+1]=i,r[e+2]=a,r[e+3]=o,d=Math.max(d,Math.abs(n[e]),Math.abs(n[e+1]),n[e+2],n[e+3])}return g}}}var Se=`
  uniform sampler2D uWake;
  vec4 readWake(vec2 uv){return texture2D(uWake,clamp(uv,vec2(.001),vec2(.999)));}
  vec2 wakeFlow(vec4 wake){return (wake.rg*255.-128.)/127.*step(.001,wake.b+wake.a);}
`,Ce=`
  float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise21(vec2 p){
    vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.,1.)),f.x),f.y);
  }
  float fbm(vec2 p){
    float v=0.;float a=.5;mat2 r=mat2(.8,.6,-.6,.8);
    for(int i=0;i<4;i++){v+=a*noise21(p);p=r*p*2.04+9.2;a*=.49;}
    return v;
  }
  float spaceVeil(vec2 p,float time){
    // The nearer dust drifts across the distant cloud instead of moving as one sheet.
    vec2 nearP=p+vec2(.010,-.0048)*time;
    float grain=fbm(nearP*3.2+vec2(6.4,-3.6));
    float ridge=abs(nearP.y-.4*nearP.x+.08+(grain-.5)*.52);
    return smoothstep(.27,.72,grain)*exp(-ridge*6.5);
  }
  vec3 cosmos(vec2 uv,float aspect,float progress,float time){
    vec2 p=(uv-.5)*vec2(aspect,1.);
    p+=vec2(progress*.024,-progress*.014);
    p+=vec2(-.0105,.0042)*time;
    float warp=fbm(p*2.1+vec2(2.,-3.)+vec2(.0039,-.003)*time);
    float dust=fbm(p*5.2+vec2(warp*1.6,warp*.8)+vec2(-.009,.006)*time);
    float cloud=pow(smoothstep(.19,.81,dust),1.7);
    float lane=exp(-pow((p.y+.46*p.x-.14-warp*.17)*2.1,2.));
    float red=pow(smoothstep(.42,.8,dust),2.)*exp(-abs(p.y+.33*p.x-.06-warp*.12)*15.);
    vec3 color=vec3(.0006,.0009,.0017);
    color+=vec3(.012,.014,.018)*cloud*(.20+lane*1.4);
    color+=vec3(.018,.0014,.002)*red;
    color*=.48+.52*smoothstep(.08,.78,uv.x);
    return color;
  }
`,we=f.clamp,Te=f.smoothstep,Ee=5.25,De=Ee*901/1600,Oe=t.scene.glassThickness,O=.02;function ke(){let e=le(Ee,De,24,7819),t=se(8742),n=[],r={position:[],normal:[],uv:[],aTarget:[],aCenter:[],aScatter:[],aAxis:[],aAngle:[],aDelay:[],aSeed:[],aSurface:[],aInternal:[],aPiece:[]};e.forEach((e,i)=>{let[o,s]=e.center,c={cell:e,triangles:ue(e,Oe,O),axis:new a((t()-.5)*1.8,(t()-.5)*2,(t()-.5)*.7).normalize(),scatter:new a(o*1.26+(t()-.5)*.9,s*1.38+(t()-.5)*.8,(t()-.5)*2.8),angle:(t()-.5)*2.4,delay:t()*.16,seed:t()*12,response:new a};n.push(c),c.triangles.forEach(e=>e.corners.forEach(t=>{r.position.push(t.point[0]-o,t.point[1]-s,t.point[2]),r.normal.push(...e.normal),r.uv.push(...t.uv),r.aTarget.push(...t.target),r.aCenter.push(o,s,0),r.aScatter.push(c.scatter.x,c.scatter.y,c.scatter.z),r.aAxis.push(c.axis.x,c.axis.y,c.axis.z),r.aAngle.push(c.angle),r.aDelay.push(c.delay),r.aSeed.push(c.seed),r.aSurface.push({front:1,back:0,bevel:2,wall:3}[e.surface]),r.aInternal.push(Number(e.internal)),r.aPiece.push(i)}))});let i=new b;return Object.entries(r).forEach(([e,t])=>i.setAttribute(e,new y(t,e===`uv`?2:[`aAngle`,`aDelay`,`aSeed`,`aSurface`,`aInternal`,`aPiece`].includes(e)?1:3))),{geometry:i,pieces:n}}var Ae=`
  attribute vec3 aTarget;attribute vec3 aCenter;attribute vec3 aScatter;attribute vec3 aAxis;
  attribute float aAngle;attribute float aDelay;attribute float aSeed;attribute float aSurface;attribute float aInternal;attribute float aPiece;
  uniform vec3 uShardResponse[24];
  uniform float uAssembly;uniform float uTime;uniform float uMotion;
  varying vec2 vUv;varying vec3 vWorld;varying vec3 vNormal;varying vec3 vViewPosition;
  varying float vJoined;varying float vSurface;varying float vInternal;
  vec3 spin(vec3 p,vec3 axis,float angle){return p*cos(angle)+cross(axis,p)*sin(angle)+axis*dot(axis,p)*(1.-cos(angle));}
  void main(){
    float joined=uAssembly>.999?1.:smoothstep(aDelay,.82+aDelay,uAssembly);
    float free=1.-joined,drift=free*uMotion;
    vec3 response=uShardResponse[int(aPiece)];
    float angle=aAngle*free+sin(uTime*.18+aSeed)*.025*drift+response.z;
    vec3 center=mix(aScatter,aCenter,joined);center.y+=sin(uTime*.22+aSeed)*.045*drift;center.z+=cos(uTime*.17+aSeed)*.04*drift;
    center.xy+=response.xy;
    vec3 local=spin(position,aAxis,angle)+center;
    local=mix(local,aTarget,smoothstep(.96,1.,joined));
    vec4 world=modelMatrix*vec4(local,1.);vec4 view=viewMatrix*world;
    vWorld=world.xyz;vNormal=normalize(mat3(modelMatrix)*spin(normal,aAxis,angle));vViewPosition=view.xyz;
    vUv=uv;vJoined=joined;vSurface=aSurface;vInternal=aInternal;
    gl_Position=projectionMatrix*view;
  }
`,je=`
  uniform sampler2D uImage;uniform sampler2D uBackground;uniform float uAssembly;uniform float uHover;uniform float uLowQuality;
  uniform float uThickness;uniform float uRoughness;uniform float uReflection;uniform vec2 uResolution;uniform vec2 uRefractionScale;uniform vec2 uRTResolution;uniform vec2 uPointer;
  varying vec2 vUv;varying vec3 vWorld;varying vec3 vNormal;varying vec3 vViewPosition;
  varying float vJoined;varying float vSurface;varying float vInternal;
  vec3 environment(vec3 r){
    r.xy-=uPointer*vec2(.065,.045);
    float broad=pow(max(dot(r,normalize(vec3(-.48,.64,.62))),0.),6.);
    float strip=exp(-pow((r.y-.36)*12.,2.))*(.35+.65*exp(-pow(r.x*1.6,2.)));
    float soft=pow(max(dot(r,normalize(vec3(.78,.24,.58))),0.),16.);
    float sideStrip=exp(-pow((r.x-.48)*6.,2.))*exp(-pow((r.y+.1)*.7,2.));
    float red=exp(-pow((r.x+.72)*15.,2.))*exp(-pow((r.y+.13)*7.,2.));
    return vec3(.004,.007,.010)+vec3(.30,.35,.40)*broad+vec3(1.2,1.28,1.34)*strip+vec3(1.1,1.16,1.2)*soft+vec3(.20,.24,.26)*sideStrip+vec3(.28,.014,.009)*red;
  }
  void main(){
    if(vInternal>.5&&uAssembly>.995)discard;
    vec3 N=normalize(vNormal),V=normalize(cameraPosition-vWorld);
    float nv=max(dot(N,V),0.);float fresnel=.04+.96*pow(1.-nv,5.);
    vec3 viewN=normalize(mat3(viewMatrix)*N),incident=normalize(vViewPosition);
    vec3 through=refract(incident,viewN,1./1.5);
    vec2 bend=(through.xy/max(abs(through.z),.22)-incident.xy/max(abs(incident.z),.22))*uThickness;
    vec2 screen=gl_FragCoord.xy/uResolution;
    vec2 offset=bend*uRefractionScale;
    vec2 sampleUV=clamp(screen+offset,vec2(.001),vec2(.999));
    vec3 transmission=texture2D(uBackground,sampleUV).rgb;
    if(uLowQuality<.5){
      vec2 blur=vec2(uRoughness*4.)/uRTResolution;
      transmission=transmission*.6+texture2D(uBackground,clamp(sampleUV+blur,vec2(.001),vec2(.999))).rgb*.2+texture2D(uBackground,clamp(sampleUV-blur,vec2(.001),vec2(.999))).rgb*.2;
      transmission.r=texture2D(uBackground,clamp(screen+offset*1.045,vec2(.001),vec2(.999))).r;
      transmission.b=texture2D(uBackground,clamp(screen+offset*.96,vec2(.001),vec2(.999))).b;
    }
    transmission*=exp(-vec3(.26,.12,.065)*uThickness/max(abs(through.z),.3));
    vec3 reflection=environment(reflect(-V,N))*uReflection;
    float edge=step(1.5,vSurface);
    float wall=step(2.5,vSurface);
    // A cut edge transmits a longer, slightly cool-green path. It should read
    // as clear glass depth, never as an opaque charcoal frame around a tile.
    transmission*=mix(vec3(1.),vec3(.86,.99,.95),wall);
    reflection+=vec3(.018,.042,.036)*wall;
    reflection+=vec3(.18,.008,.004)*uHover*edge;
    vec3 color=mix(transmission,reflection,clamp(fresnel*(1.-wall*.48)+edge*.045,0.,.88));
    vec4 image=texture2D(uImage,vUv);
    float front=1.-step(.25,abs(vSurface-1.));
    float central=1.-smoothstep(.10,.50,length((vUv-.5)*vec2(1.,.9)));
    float earlyReveal=mix(.08,.82,central);
    float completion=smoothstep(.55,.98,uAssembly);
    float imageMix=smoothstep(.05,.84,vJoined)*mix(earlyReveal,1.,completion)*front;
    color=mix(color,image.rgb,imageMix*image.a);
    color+=reflection*fresnel*(1.-completion)*front*.7;
    if(front>.5&&uAssembly>.999)color=image.rgb;
    gl_FragColor=vec4(color,1.);
    #include <colorspace_fragment>
  }
`;function Me(e){return new Promise(t=>new s().load(e,e=>{e.colorSpace=o,t(e)},void 0,()=>t(null)))}async function k(s,l){let y=new ie({canvas:s,antialias:!l.mobile,alpha:!1,powerPreference:`high-performance`}),S=!1,ce=!1,le=!0,w=0,ue,de=()=>{},he=new Promise((e,t)=>{de=t});s.addEventListener(`webglcontextlost`,Kt),y.outputColorSpace=o,y.setClearColor(197897,1),y.info.autoReset=!1,y.autoClear=!1;let ge=new n,_e=new n,ve=new n,T=new te(39,1,.15,170),E=new te(36,1,.1,40);T.position.set(0,.1,13),E.position.set(0,0,9);let be=[],D=e=>(S?e.dispose():be.push(e),e),O=xe(160,104),k=D(new g(O.data,O.width,O.height,oe,i));k.minFilter=k.magFilter=ee,k.generateMipmaps=!1,k.needsUpdate=!0;let A={uAspect:{value:1},uProgress:{value:0},uTime:{value:0},uGalaxyTime:{value:0},uStarTime:{value:0},uMotion:{value:+!l.reducedMotion},uPointer:{value:new r},uPointerStrength:{value:0},uPointerWake:{value:0},uSpaceResponse:{value:1},uCameraOffset:{value:new r},uWake:{value:k}},Ne=D(new C({depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:A,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}`,fragmentShader:`varying vec2 vUv;uniform float uAspect;uniform float uProgress;uniform float uSpaceResponse;uniform float uGalaxyTime;uniform vec2 uCameraOffset;${Se}${Ce}void main(){
    vec4 wake=readWake(vUv);
    vec2 flow=wakeFlow(wake)*uSpaceResponse;
    vec2 warped=vUv-flow*vec2(.052/uAspect,.052);
    vec2 p=(warped-.5)*vec2(uAspect,1.);
    float veil=spaceVeil(p+uCameraOffset*.035,uGalaxyTime);
    vec3 distant=cosmos(warped+uCameraOffset*vec2(.0045/uAspect,.0045),uAspect,uProgress,uGalaxyTime);
    vec3 cloud=distant*(1.-veil*.72)+vec3(.005,.0065,.0078)*pow(veil,.75);
    float filament=noise21(mat2(.8,.6,-.6,.8)*p*28.+flow*1.6);
    filament*=.4+.6*noise21(p*63.);
    cloud*=1.-wake.b*uSpaceResponse*.58;
    cloud+=vec3(.009,.011,.014)*wake.a*uSpaceResponse*(.25+.75*filament);
    gl_FragColor=vec4(cloud,1.);
    #include <colorspace_fragment>
  }`})),Pe=new ne(D(new m(2,2)),Ne);Pe.renderOrder=-100,Pe.frustumCulled=!1,ge.add(Pe);let Fe=me(l.mobile),Ie=Fe.count,Le=Ie+Math.ceil(Ie*.5),Re=new Float32Array(Le*3),ze=new Float32Array(Le*3),Be=new Float32Array(Le),Ve=new Float32Array(Le),He=new Float32Array(Le),Ue=se(73105);for(let e=0,t=0;e<Ie;e++,t++)if(Re.set(Fe.positions.subarray(e*3,e*3+3),t*3),ze.set(Fe.colors.subarray(e*3,e*3+3),t*3),Be[t]=Fe.sizes[e],Ve[t]=Fe.layers[e],e%2==0){t++,Re.set([(Ue()-.5)*2.25,(Ue()-.5)*2.2,-8-Ue()*38],t*3);let e=.26+Ue()*.39;ze.set([e*.84,e*.94,e],t*3),Be[t]=.7+Ue()*1.2,Ve[t]=1,He[t]=1}let We=D(new b);We.setAttribute(`position`,new v(Re,3)),We.setAttribute(`aSize`,new v(Be,1)),We.setAttribute(`aColor`,new v(ze,3)),We.setAttribute(`aLayer`,new v(Ve,1)),We.setAttribute(`aWakeOnly`,new v(He,1));let Ge=D(new C({transparent:!0,depthWrite:!1,blending:2,toneMapped:!1,uniforms:{uPixelRatio:{value:1},uTime:A.uTime,uGalaxyTime:A.uGalaxyTime,uStarTime:A.uStarTime,uMotion:A.uMotion,uPointer:A.uPointer,uPointerStrength:A.uPointerStrength,uPointerWake:A.uPointerWake,uAspect:A.uAspect,uSpaceResponse:A.uSpaceResponse,uCameraOffset:A.uCameraOffset,uWake:A.uWake},vertexShader:`
      attribute float aSize;attribute vec3 aColor;attribute float aLayer;attribute float aWakeOnly;
      uniform float uPixelRatio;uniform float uTime;uniform float uGalaxyTime;uniform float uStarTime;uniform float uMotion;uniform float uAspect;uniform vec2 uPointer;uniform float uPointerStrength;uniform float uPointerWake;uniform float uSpaceResponse;uniform vec2 uCameraOffset;
      varying vec3 vColor;varying float vGlint;varying float vDust;
      ${Se}
      ${Ce}
      void main(){
        float referenceDepth=13.-position.z;
        // Follow the galaxy's diagonal flow. Wrap outside the visible frustum;
        // the shared phase pauses for reduced motion and hidden documents.
        float flowSpeed=.55+aLayer*.6+aLayer*aLayer*.15;
        vec2 flow=vec2(.008,-.0036)*uStarTime*flowSpeed;
        vec2 reference=mod(position.xy+flow+vec2(1.25),vec2(2.5))-vec2(1.25);
        vec3 world=vec3(reference*referenceDepth*.3541186*vec2(uAspect,1.),position.z);
        float drift=uMotion*smoothstep(.5,2.,aLayer)*.045;
        world.xy+=vec2(sin(uTime*.09+position.y*9.),cos(uTime*.07+position.x*8.))*drift;
        vec4 mv=modelViewMatrix*vec4(world,1.);vec4 clip=projectionMatrix*mv;
        float nearby=smoothstep(.2,2.,aLayer);
        vec4 wake=readWake(clip.xy/clip.w*.5+.5);
        clip.xy+=wakeFlow(wake)/vec2(uAspect,1.)*(mix(.045,.13,nearby)+aWakeOnly*.055)*uSpaceResponse*clip.w;
        vec2 delta=(clip.xy/clip.w-uPointer)*vec2(uAspect,1.);
        float distance=length(delta);
        float selected=step(.3,fract(sin(dot(position.xy,vec2(12.9898,78.233)))*43758.5453));
        float approach=(1.-smoothstep(.025,.23,distance))*uPointerStrength*selected*uSpaceResponse;
        vec2 direction=delta/max(distance,.001);
        clip.xy+=direction/vec2(uAspect,1.)*approach*mix(.006,.023,nearby)*clip.w;
        gl_Position=clip;
        vGlint=step(3.4,aSize);
        vDust=step(1.5,aLayer);
        gl_PointSize=clamp(aSize*referenceDepth/max(-mv.z,1.),.55,5.5)*uPixelRatio;
        float pulse=1.-uMotion*(.08+.08*sin(uTime*.26+position.x*2.3));
        float response=1.+approach*uPointerWake*(.35+.12*sin(position.x*2.3+uTime*3.));
        vec2 cloudP=clip.xy/clip.w*.5*vec2(uAspect,1.)+uCameraOffset*.035;
        float veil=spaceVeil(cloudP,uGalaxyTime);
        float swept=(1.-wake.b*uSpaceResponse*.48)*(1.+wake.a*uSpaceResponse*1.7);
        float wakeVisibility=mix(1.,pow(wake.a,.65)*uSpaceResponse,aWakeOnly);
        vColor=aColor*pulse*response*swept*wakeVisibility*mix(1.-veil*.8,1.,smoothstep(.4,1.8,aLayer));
      }`,fragmentShader:`
      varying vec3 vColor;varying float vGlint;varying float vDust;
      void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
        float core=1.-smoothstep(.02,.48,mix(d,length((gl_PointCoord-.5)*vec2(.9,1.35)),vDust));vec2 p=abs(gl_PointCoord-.5);
        float cross=(exp(-p.x*68.)*exp(-p.y*4.)+exp(-p.y*68.)*exp(-p.x*4.))*vGlint;
        gl_FragColor=vec4(vColor,min(1.,core*.86+cross*.35));
        #include <colorspace_fragment>
      }`})),Ke=new c(We,Ge);Ke.renderOrder=-10,Ke.frustumCulled=!1,ge.add(Ke);let j=D(new _(2,2,{type:y.extensions.has(`EXT_color_buffer_float`)?d:i,minFilter:ee,magFilter:ee,depthBuffer:!1,generateMipmaps:!1}));j.texture.colorSpace=x;let qe=D(ye(j.texture));ve.add(qe.group);let Je=null;if(!l.detail){try{if(Je=await Promise.race([Me(e.cover).then(e=>e?D(e):null),he]),S||ce)throw Error(`Graphics context lost during media loading.`);if(!Je)throw Error(`The real game cover could not be loaded.`)}catch(e){throw Jt(),e}Je.anisotropy=Math.min(y.capabilities.getMaxAnisotropy(),4)}let Ye=D(new g(new Uint8Array([0,0,0,0]),1,1));Ye.needsUpdate=!0;let M=l.detail?null:ke();M&&D(M.geometry);let Xe=M?.pieces.map(e=>e.response)??Array.from({length:24},()=>new a),N={uImage:{value:Je||Ye},uBackground:{value:j.texture},uAssembly:{value:.5},uHover:{value:0},uLowQuality:{value:+!!l.mobile},uThickness:{value:Oe},uRoughness:{value:.08},uReflection:{value:t.scene.reflection},uResolution:{value:new r(1,1)},uRefractionScale:{value:new r(1,1)},uRTResolution:{value:new r(2,2)},uTime:A.uTime,uMotion:A.uMotion,uPointer:A.uPointer,uShardResponse:{value:Xe}},Ze=D(new C({uniforms:N,vertexShader:Ae,fragmentShader:je,side:0,transparent:!1,depthWrite:!0,toneMapped:!1})),P=new re;if(M){let e=new ne(M.geometry,Ze);e.frustumCulled=!1,P.add(e)}_e.add(P);let F=null,Qe=+!!l.detail,$e=0,et=0,I=0,L=0,tt=!1,R=0,nt=0,rt=0,z=l.mobile,B=l.mobile,it=0,at=0,V=1,ot=0,st=0,ct=0,H=0,lt=0,ut=0,dt=0,ft=0,pt=0,mt=performance.now(),ht=null,U=.5,gt=0,W=1,G=1,K={left:0,top:0},q=null,_t=new ae,vt=new r,yt=new u,bt=new p,xt=new a,St=new h(new a(0,0,1),0),Ct=new a,wt=new a,Tt=new a,Et=new a,J=null,Y=null,Dt=!1,X=!1,Z=!1,Q=0,Ot=!1,kt=``,$=null,At=new a;function jt(){Z=!1,$=null}function Mt(e,t){return!!q&&!!$&&e>=$.left&&e<=$.right&&t>=$.top&&t<=$.bottom}function Nt(){if(!F||!q||!M)return null;let e={left:1/0,top:1/0,right:-1/0,bottom:-1/0};function t(t){t.applyMatrix4(P.matrixWorld).project(E);let n=F.left+(t.x+1)*F.width*.5,r=F.top+(1-t.y)*F.height*.5;e.left=Math.min(e.left,n),e.right=Math.max(e.right,n),e.top=Math.min(e.top,r),e.bottom=Math.max(e.bottom,r)}for(let e of M.pieces){let n=U>.999?1:Te(U,e.delay,.82+e.delay),r=1-n,i=e.angle*r+Math.sin(H*.18+e.seed)*.025*r*!l.reducedMotion;for(let r of e.triangles)for(let a of r.corners)Lt(At,a,e,n,i),t(At)}for(let e of[-5.25*.66,Ee*.66])for(let n of[-1.951228125,De*.66])t(At.set(e,n,0));return e.left=Math.max(K.left+q.left,e.left-20),e.right=Math.min(K.left+q.left+q.width,e.right+20),e.top=Math.max(K.top+q.top,e.top-20),e.bottom=Math.min(K.top+q.top+q.height,e.bottom+20),e}function Pt(e){Dt!==e&&(Dt=e,N.uHover.value=+!!e,s.style.cursor=e?`pointer`:``)}function Ft(){X=!0,jt(),Q=0,W=s.clientWidth||innerWidth,G=s.clientHeight||innerHeight;let e=s.getBoundingClientRect();K.left=e.left,K.top=e.top,O.clear()&&(k.needsUpdate=!0),B=W<760;let n=Math.min(devicePixelRatio||1,z||B?1.15:1.6);y.setPixelRatio(n),y.setSize(W,G,!1);let r=Math.floor(Math.min(Le,B?1575:Le)*t.scene.starDensity);We.setDrawRange(0,z?Math.floor(r*.55):r),T.aspect=W/Math.max(G,1),T.updateProjectionMatrix(),A.uAspect.value=T.aspect,Ge.uniforms.uPixelRatio.value=n,y.getDrawingBufferSize(N.uResolution.value);let i=Math.min(B||z?.48:.72,(B||z?900:1800)/Math.max(W*n,G*n));j.setSize(Math.max(2,Math.round(W*n*i)),Math.max(2,Math.round(G*n*i))),N.uRTResolution.value.set(j.width,j.height),N.uLowQuality.value=B||z?1:0}function It(){if(q=null,it=at=0,!F||l.detail||F.width<=0||F.height<=0){gt=0,Pt(!1);return}let e=F.left-K.left,t=F.top-K.top,n=Math.max(0,e),r=Math.max(0,t),i=Math.min(W,e+F.width),a=Math.min(G,t+F.height);if(i<=n||a<=r){gt=0,Pt(!1);return}q={left:n,top:r,width:i-n,height:a-r},gt=1,E.aspect=F.width/F.height,E.updateProjectionMatrix();let o=18*Math.tan(f.degToRad(E.fov/2)),s=o*E.aspect,c=f.lerp(.8,1,Te(U,.5,1)),u=Math.min(s/Ee,o/De)*.78*c*(B?1.14:1),d=pe(U);it=L*.027*d,at=I*.035*d,P.scale.setScalar(u),P.rotation.set((1-U)*.12+it,-.075-(1-U)*.28+at,(1-U)*-.045),P.position.set(I*s*12/F.width*d,-L*o*10/F.height*d,0),E.position.set(0,0,9),E.lookAt(0,0,0),N.uRefractionScale.value.set(F.width/W/s,F.height/G/o),N.uThickness.value=Oe*u,P.updateMatrixWorld(!0),E.updateMatrixWorld()}function Lt(e,t,n,r,i){let a=1-r,o=+!l.reducedMotion;e.set(t.point[0]-n.cell.center[0],t.point[1]-n.cell.center[1],t.point[2]).applyAxisAngle(n.axis,i+n.response.z),e.x+=f.lerp(n.scatter.x,n.cell.center[0],r)+n.response.x,e.y+=f.lerp(n.scatter.y,n.cell.center[1],r)+Math.sin(H*.22+n.seed)*.045*a*o+n.response.y,e.z+=n.scatter.z*a+Math.cos(H*.17+n.seed)*.04*a*o;let s=Te(r,.96,1);e.x=f.lerp(e.x,t.target[0],s),e.y=f.lerp(e.y,t.target[1],s),e.z=f.lerp(e.z,t.target[2],s)}function Rt(e,t){if(!F||!q||!M)return!1;let n=e-K.left,r=t-K.top;return n<q.left||n>q.left+q.width||r<q.top||r>q.top+q.height?!1:(vt.set((e-F.left)/F.width*2-1,-(t-F.top)/F.height*2+1),_t.setFromCamera(vt,E),bt.copy(P.matrixWorld).invert(),yt.copy(_t.ray).applyMatrix4(bt),!0)}function zt(e){if(!M)return;let t=tt&&!l.reducedMotion&&!B,n=t&&Y&&Rt(Y.x,Y.y)&&yt.intersectPlane(St,xt)!==null,r=1-Math.exp(-e*12);rt=0;for(let e of M.pieces){let i=U>.999?1:Te(U,e.delay,.82+e.delay),a=fe(f.lerp(e.scatter.x,e.cell.center[0],i),f.lerp(e.scatter.y,e.cell.center[1],i)+Math.sin(H*.22+e.seed)*.045*(1-i)*!l.reducedMotion,xt.x,xt.y,U,!!n,e.seed),o=e.response.x,s=e.response.y,c=e.response.z;!t||U>.999?e.response.set(0,0,0):(e.response.x=f.lerp(o,a.x,r),e.response.y=f.lerp(s,a.y,r),e.response.z=f.lerp(c,a.angle,r),Math.abs(e.response.x)<1e-5&&(e.response.x=0),Math.abs(e.response.y)<1e-5&&(e.response.y=0),Math.abs(e.response.z)<1e-5&&(e.response.z=0)),Math.abs(o-e.response.x)+Math.abs(s-e.response.y)+Math.abs(c-e.response.z)>1e-5&&(X=!0),rt=Math.max(rt,Math.hypot(e.response.x,e.response.y))}}function Bt(e,t){if(!Rt(e,t)||!M)return!1;for(let e of M.pieces){let t=U>.999?1:Te(U,e.delay,.82+e.delay),n=1-t,r=e.angle*n+Math.sin(H*.18+e.seed)*.025*n*!l.reducedMotion;for(let n of e.triangles)if(!(n.internal&&U>.995)&&(Lt(Ct,n.corners[0],e,t,r),Lt(wt,n.corners[1],e,t,r),Lt(Tt,n.corners[2],e,t,r),yt.intersectTriangle(Ct,wt,Tt,!1,Et)))return!0}return!1}function Vt(e){e.pointerType===`mouse`&&(Y={x:e.clientX,y:e.clientY},X=!0)}function Ht(){J=Y=null,jt(),X=!1,Pt(!1)}function Ut(e){J={x:e.clientX,y:e.clientY}}function Wt(e){!J||Math.hypot(e.clientX-J.x,e.clientY-J.y)>8?J=null:(J=null,(Bt(e.clientX,e.clientY)||Z&&Mt(e.clientX,e.clientY))&&l.onHotspot(`game`))}function Gt(){document.hidden?cancelAnimationFrame(w):!S&&!ce&&(ct=0,mt=performance.now(),dt=0,w=requestAnimationFrame(Yt))}function Kt(e){e.preventDefault(),ce=!0,cancelAnimationFrame(w),le&&(de(Error(`Graphics context lost during media loading.`)),Jt()),s.dispatchEvent(new CustomEvent(`scene-context-lost`,{bubbles:!0}))}function qt(){ce=!1,ct=0,!document.hidden&&!S&&(w=requestAnimationFrame(Yt))}function Jt(){if(!S){S=!0,cancelAnimationFrame(w),ue?.disconnect(),document.removeEventListener(`visibilitychange`,Gt),s.removeEventListener(`pointerdown`,Ut),s.removeEventListener(`pointerup`,Wt),s.removeEventListener(`pointermove`,Vt),s.removeEventListener(`pointerleave`,Ht),s.removeEventListener(`webglcontextlost`,Kt),s.removeEventListener(`webglcontextrestored`,qt),s.style.cursor=``;for(let e of be)e.dispose();be.length=0,y.dispose(),ge.clear(),_e.clear(),ve.clear()}}function Yt(e){if(S||document.hidden||ce||(w=requestAnimationFrame(Yt),(B||z)&&ct&&e-ct<31))return;let n=ct?Math.min((e-ct)/1e3,.08):1/60;ct=e,H=ht??H+n;let r=tt&&!l.reducedMotion&&!B;O.update(n,r,T.aspect)&&(k.needsUpdate=!0);let i=1-Math.exp(-n*8),a=I,o=L,s=r?$e:0,c=r?et:0;I=f.lerp(I,s,i),L=f.lerp(L,c,i),Math.abs(I-s)<5e-5&&(I=s),Math.abs(L-c)<5e-5&&(L=c),R=f.lerp(R,+!!r,i),R<5e-5&&(R=0),nt*=Math.exp(-n*3.5),(l.reducedMotion||B)&&(I=L=R=nt=0),Math.abs(a-I)+Math.abs(o-L)>1e-5&&(X=!0),A.uProgress.value=Qe,A.uTime.value=H,A.uMotion.value=+!l.reducedMotion;let u=U;if(!r||!F||l.detail?jt():X&&!Z&&Y&&Bt(Y.x,Y.y)&&($=Nt(),Z=$!==null),l.reducedMotion||B)Q=0;else{let e=Z||Ot&&F?1:0;Q=f.lerp(Q,e,1-Math.exp(-n*(Z?8:5)*t.scene.assemblySpeed)),Math.abs(Q-e)<.001&&(Q=e)}let d=l.reducedMotion||B||G<560?1:.5;U=f.lerp(d,1,Q),N.uAssembly.value=U,It(),zt(n);let p=U>.995?`ready`:Z||Ot?`assembling`:`idle`;p!==kt&&(kt=p,l.onStageStateChange?.(p)),V=f.lerp(V,q&&!l.detail?1:.3,1-Math.exp(-n*4)),ht===null?l.reducedMotion||(lt+=n*(B?.78:1)*(.38+.62*V)*t.scene.galaxySpeed):lt=ht,A.uGalaxyTime.value=lt,ht===null?l.reducedMotion||(ut+=n*(B?.78:1)*(.38+.62*V)*t.scene.starSpeed):ut=ht*t.scene.starSpeed,A.uStarTime.value=ut;let m=I*.42*V*t.scene.pointerIntensity,h=-L*.27*V*t.scene.pointerIntensity;if(T.position.set(m,.1+h,13-Qe*.85),T.lookAt(m,.1+h,-Qe*.85),ot=f.lerp(ot,m,1-Math.exp(-n*2.5)),st=f.lerp(st,h,1-Math.exp(-n*2.5)),A.uCameraOffset.value.set(ot,st),A.uPointer.value.set(I,-L),A.uPointerStrength.value=R,A.uPointerWake.value=nt,A.uSpaceResponse.value=V,qe.update({aspect:T.aspect,cameraZ:T.position.z,time:H,motion:!l.reducedMotion,mobile:B,lowQuality:z,strength:V,pixelRatio:y.getPixelRatio(),width:W,height:G}),(u!==U||!l.reducedMotion&&U<.999)&&(X=!0),X){X=!1;let e=Y!==null&&Bt(Y.x,Y.y);r&&q&&Y?Z&&!Mt(Y.x,Y.y)?jt():!Z&&e&&($=Nt(),Z=$!==null):jt(),Pt(e||Z||Ot&&!!q)}let g=performance.now();y.info.reset(),q&&F&&(y.setRenderTarget(j),y.setScissorTest(!1),y.clear(),y.render(ge,T)),y.setRenderTarget(null),y.setViewport(0,0,W,G),y.setScissorTest(!1),y.clear(),y.render(ge,T),q&&F&&(y.render(ve,T),y.setViewport(F.left-K.left,G-(F.top-K.top)-F.height,F.width,F.height),y.setScissor(q.left,G-q.top-q.height,q.width,q.height),y.setScissorTest(!0),y.clearDepth(),y.render(_e,E),y.setScissorTest(!1),y.setViewport(0,0,W,G));let _=performance.now()-g;pt=pt?pt*.9+_*.1:_,dt++,e-mt>1e3&&(ft=Math.round(dt*1e3/(e-mt)),dt=0,mt=e)}return ue=new ResizeObserver(Ft),ue.observe(s),s.addEventListener(`pointerdown`,Ut),s.addEventListener(`pointerup`,Wt),s.addEventListener(`pointermove`,Vt),s.addEventListener(`pointerleave`,Ht),s.addEventListener(`webglcontextrestored`,qt),document.addEventListener(`visibilitychange`,Gt),Ft(),le=!1,w=requestAnimationFrame(Yt),l.onReady?.(),{setStageViewport(e){let t=e&&[e.left,e.top,e.width,e.height].every(Number.isFinite)&&e.width>0&&e.height>0?{...e}:null;(F?.left!==t?.left||F?.top!==t?.top||F?.width!==t?.width||F?.height!==t?.height)&&(X=!0,jt()),F=t,It()},setStageFocused(e){Ot=e,X=!0},setInspectionTime(e){ht=e!==null&&Number.isFinite(e)?we(e,0,3600):null,X=!0},setPointer(e,t,n=!0){let r=n&&Number.isFinite(e)&&Number.isFinite(t),i=r?we(e,-1,1):0,a=r?we(t,-1,1):0;r&&!l.reducedMotion&&!B?O.move(i,-a,performance.now()/1e3,T.aspect):O.clear()&&(k.needsUpdate=!0),r&&(nt=Math.max(nt,Math.min(1,Math.hypot(i-$e,a-et)*12))),$e=i,et=a,tt=r,Y=r?{x:(i+1)*document.documentElement.clientWidth*.5,y:(a+1)*innerHeight*.5}:null,X=!0,r||(J=null,jt(),Pt(!1))},setReducedMotion(e){l.reducedMotion=e,jt(),Q=0,O.clear()&&(k.needsUpdate=!0),tt=!1,$e=et=I=L=R=nt=ot=st=0;for(let e of Xe)e.set(0,0,0);rt=0,X=!0},setLowQuality(e){z=e,Ft()},getStats(){return{fps:ft,drawCalls:y.info.render.calls,triangles:y.info.render.triangles,quality:B||z?`轻量`:`精细`,assembly:U,windowOpacity:gt,shards:M?.pieces.length??0,renderMs:Math.round(pt*100)/100,thickness:Oe,refractionSize:[j.width,j.height],stageVisible:!!q,pointerStrength:Math.round(R*1e3)/1e3,glassTilt:[f.radToDeg(it),f.radToDeg(at)],maxShardOffset:Math.round(rt*1e4)/1e4,depthLayers:3,foregroundShards:qe.count,cameraOffset:[T.position.x,T.position.y-.1],backgroundResponse:Math.round(V*1e3)/1e3,wakeStrength:Math.round(O.strength*1e3)/1e3,wakeActive:O.active,galaxyTime:Math.round(lt*1e3)/1e3,hoverAssembling:Z,hoverAssemblyBlend:Math.round(Q*1e3)/1e3}},dispose:Jt}}export{k as createScene};
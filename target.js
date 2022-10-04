/* @param {NS} ns */
export async function main(ns) {

// all known servers seperated into lists based off required posts open.
// server0 being no ports needed, server1 being 1 port needed and so on
const server0 = ['N00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-suchi'];
const server1 = ['max-hardware','neo-net','csec','iron-gym','zer0'];
const server2 = ['johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub',];
const server3 = ['summit-uni','rho-construction','millenium-fitness','i.i.i.i','rothman-uni','catalyst','computek'];
const server4 = ['syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'];
const server5 = ['galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','the-cave','w0r1d_d43m0n'];

//predefining the length of each of the lists for better loop times
var server0l = server0.length;
var server1l = server1.length;
var server2l = server2.length;
var server3l = server3.length;
var server4l = server4.length;
var server5l = server5.length;

var s0 = 0
var s1 = 0
var s2 = 0
var s3 = 0
var s4 = 0
var s5 = 0

for (i = 0; i < server0l; i++) {

  let target = server0[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s0 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('0 port server with highest max money:' + server0[Number(name)])

for (i = 0; i < server1l; i++) {

  let target = server1[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s1 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('1 port server with highest max money:' + server1[Number(name)])

for (i = 0; i < server2l; i++) {

  let target = server2[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s2 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('2 port server with highest max money:' + server2[Number(name)])

for (i = 0; i < server3l; i++) {

  let target = server3[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s2 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('3 port server with highest max money:' + server3[Number(name)])

for (i = 0; i < server4l; i++) {

  let target = server4[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s2 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('4 port server with highest max money:' + server4[Number(name)])

for (i = 0; i < server5l; i++) {

  let target = server5[Number(i)];

  if (ns.getServerMaxMoney(target) > s0) {
    var name = i
    s2 = ns.getServerMaxMoney(target)
  }
}

ns.tprint('5 port server with highest max money:' + server5[Number(name)])

}
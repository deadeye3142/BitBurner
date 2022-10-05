/**  @param {import(".").NS} ns */

export async function main(ns) {
  // all known servers seperated into lists based off required posts open.
  // server0 being no ports needed, server1 being 1 port needed and so on
  const server0 = ['n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi'];
  const server1 = ['max-hardware','neo-net','CSEC','iron-gym','zer0'];
  const server2 = ['johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub',];
  const server3 = ['summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek'];
  const server4 = ['syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.'];
  const server5 = ['galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];
  var hs = ns.getHackingLevel();
  //predefining the length of each of the lists for better loop times
  var server0l = server0.length;
  var server1l = server1.length;
  var server2l = server2.length;
  var server3l = server3.length;
  var server4l = server4.length;
  var server5l = server5.length;
 
  // scripts to be ran intended to make it easier to swap script usage
  const script = ['foo.js','iron.js','joth.js'];
  const scripttarget = ['foodnstuff','iron-gym','rothman-uni'];

  // will use args to reset the chain.
  // meaning this script can mass killall across all servers easily incas of error
  var reset = ns.args[0];

  //Kills all scripts across all known servers
  if (reset == 4) {
    await ns.killall('home');
    for (var i = 0; i < server0l; i++) {
      ns.killall(server0[Number(i)]);
    }
    for (var i = 0; i < server1l; i++) {
      ns.killall(server1[Number(i)]);
    }
    for (var i = 0; i < server2l; i++) {
      ns.killall(server2[Number(i)]);
    }
    for (var i = 0; i < server3l; i++) {
      ns.killall(server3[Number(i)]);
    }
    for (var i = 0; i < server4l; i++) {
      ns.killall(server4[Number(i)]);
    }
    for (var i = 0; i < server5l; i++) {
      ns.killall(server5[Number(i)]);
    }
  }

  //Nuke all server 0
  for (var i = 0; i < server0l; i++) {
    var target = server0[Number(i)];
    var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

    ns.tprint('attacking:' + target);
    if (ns.hasRootAccess(target) == false && hl <= 0) {
      ns.nuke(target);

      ns.scp(script[0], target);
      ns.scp(script[1], target);
      ns.scp(script[2], target);
    }
    
    if (ns.getServerMaxRam(target) > 0) {
      ns.tprint('bugfix1');
      if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
        ns.tprint('bugfix2');
        var m = ns.getServerMaxRam(target);
        var s = ns.getScriptRam(script[2]);
        var q = (Math.floor(m / s));
        ns.exec(script[2], target, Number(q));
      } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
        ns.tprint('bugfix3');
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[1], target, Number(q));
        } else {
            var m = ns.getServerMaxRam(target);
            var s = ns.getScriptRam(script[2]);
            var q = (Math.floor(m / s));
            ns.exec(script[0], target, Number(q));
          }
    }
  }

  //nuke all server 1
  if (ns.fileExists('BruteSSH.exe', "home")) {
    ns.tprint('Starting attacks on all 1 port servers')
    for (var i = 0; i < server1l; i++) {
      var target = server1[Number(i)];
      var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

      if (ns.hasRootAccess(target) == false && hl <= 0) {
        ns.tprint('attacking:' + target);
        ns.brutessh(target);
        ns.nuke(target);

        ns.scp(script[0], target);
        ns.scp(script[1], target);
        ns.scp(script[2], target);

      }
    

    
      if (ns.getServerMaxRam(target) > 0) {
        if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[2], target, Number(q));
          } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
              var m = ns.getServerMaxRam(target);
              var s = ns.getScriptRam(script[2]);
              var q = (Math.floor(m / s));
              ns.exec(script[1], target, Number(q));
            } else {
                var m = ns.getServerMaxRam(target);
                var s = ns.getScriptRam(script[2]);
                var q = (Math.floor(m / s));
                ns.exec(script[0], target, Number(q));
              }
      }
    }
  }

  //nuke all server 2
  if (ns.fileExists("FTPCrack.exe", "home")) {
    ns.tprint('Starting attacks on all 2 port servers')
    for (var i = 0; i < server2l; i++) {
      var target = server2[Number(i)];
      var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

      if (ns.hasRootAccess(target) == false && hl <= 0) {
        ns.tprint('attacking:' + target);
        ns.ftpcrack(target);
        ns.brutessh(target);
        ns.nuke(target);
      
        ns.scp(script[0], target);
        ns.scp(script[1], target);
        ns.scp(script[2], target);
      }
    }
  
    

    if (ns.getServerMaxRam(target) > 0) {
      if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
        var m = ns.getServerMaxRam(target);
        var s = ns.getScriptRam(script[2]);
        var q = (Math.floor(m / s));
        ns.exec(script[2], target, Number(q));
      } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[1], target, Number(q));
        } else {
            var m = ns.getServerMaxRam(target);
            var s = ns.getScriptRam(script[2]);
            var q = (Math.floor(m / s));
            ns.exec(script[0], target, Number(q));
          }
    }
  
  }

  //nuke all server 3
  if (ns.fileExists("relaySMTP.exe", "home")) {
    ns.tprint('Starting attacks on all 3 port servers')
    for (var i = 0; i < server3l; i++) {
      var target = server3[Number(i)];
      var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

      if (ns.hasRootAccess(target) == false && hl <= 0) {
        ns.tprint('attacking:' + target);
        ns.relaysmtp(target);
        ns.ftpcrack(target);
        ns.brutessh(target);
        ns.nuke(target);

        ns.scp(script[0], target);
        ns.scp(script[1], target);
        ns.scp(script[2], target);
      }
    }

    if (ns.getServerMaxRam(target) > 0) {
      if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
        var m = ns.getServerMaxRam(target);
        var s = ns.getScriptRam(script[2]);
        var q = (Math.floor(m / s));
        ns.exec(script[2], target, Number(q));
      } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[1], target, Number(q));
        } else {
            var m = ns.getServerMaxRam(target);
            var s = ns.getScriptRam(script[2]);
            var q = (Math.floor(m / s));
            ns.exec(script[0], target, Number(q));
          }
    }
  }

  //nuke all server 4
  if (ns.fileExists("HTTPWorm.exe", "home")) {
    ns.tprint('Starting attacks on all 4 port servers')
    for (var i = 0; i < server4l; i++) {
      var target = server4[Number(i)];
      var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

      if (ns.hasRootAccess(target) == false && hl <= 0) {
        ns.tprint('attacking:' + target);
        ns.httpworm(target);
        ns.relaysmtp(target);
        ns.ftpcrack(target);
        ns.brutessh(target);
        ns.nuke(target);

        ns.scp(script[0], target);
        ns.scp(script[1], target);
        ns.scp(script[2], target);
      }
    }

    if (ns.getServerMaxRam(target) > 0) {
      if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
        var m = ns.getServerMaxRam(target);
        var s = ns.getScriptRam(script[2]);
        var q = (Math.floor(m / s));
        ns.exec(script[2], target, Number(q));
      } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[1], target, Number(q));
        } else {
            var m = ns.getServerMaxRam(target);
            var s = ns.getScriptRam(script[2]);
            var q = (Math.floor(m / s));
            ns.exec(script[0], target, Number(q));
          }
    }
  }

  //nuke all server 5
  if (ns.fileExists("SQLInject.exe", "home")) {
    ns.tprint('Starting attacks on all 5 port servers')
    for (var i = 0; i < server5l; i++) {
      var target = server5[Number(i)];
      var hl = ns.getServerRequiredHackingLevel(target) - ns.getHackingLevel();

      if (ns.hasRootAccess(target) == false && hl <= 0) {
        ns.tprint('attacking:' + target);
        ns.sqlinject(target);
        ns.httpworm(target);
        ns.relaysmtp(target);
        ns.ftpcrack(target);
        ns.brutessh(target);
        ns.nuke(target);

        ns.scp(script[0], target);
        ns.scp(script[1], target);
        ns.scp(script[2], target);
      }
    }


    if (ns.getServerMaxRam(target) > 0) {
      if (hs >= ns.getServerRequiredHackingLevel('rothman-uni')) {
        var m = ns.getServerMaxRam(target);
        var s = ns.getScriptRam(script[2]);
        var q = (Math.floor(m / s));
        ns.exec(script[2], target, Number(q));
      } else if (hs >= ns.getServerRequiredHackingLevel(scripttarget[1])) {
          var m = ns.getServerMaxRam(target);
          var s = ns.getScriptRam(script[2]);
          var q = (Math.floor(m / s));
          ns.exec(script[1], target, Number(q));
        } else {
            var m = ns.getServerMaxRam(target);
            var s = ns.getScriptRam(script[2]);
            var q = (Math.floor(m / s));
            ns.exec(script[0], target, Number(q));
          }
    }
  }















  //this runs a dual hack on iron gym and sushi from home
  if(ns.hasRootAccess('iron-gym') == true && ns.getServerRequiredHackingLevel('iron-gym') <= ns.getHackingLevel()) {
    var m = ns.getServerMaxRam("home");
		var s = ns.getScriptRam("iron.js");
		var p = ns.getScriptRam("hara.script");
		var q = ((Math.floor(m / s)) / 2 - (ns.getScriptRam("ngv1.script")) / 2);
		var h = ((Math.floor(m / p)) / 2 - (ns.getScriptRam("ngv1.script")) / 2);

    if (ns.hasRootAccess("iron-gym") == true) {
			ns.run("iron.js", Number(q));
		}
		if (ns.hasRootAccess("harakiri-sushi") == true) {
			ns.run("hara.script", Number(h));
		}
  }



} /* */
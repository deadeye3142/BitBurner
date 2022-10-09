  /**  @param {import(".").NS} ns */
export async function main(ns) {
  const server = [/*port 0*/'n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi',
                  /*port 1*/'max-hardware','neo-net','CSEC','iron-gym','zer0',
                  /*port 2*/'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub',
                  /*port 3*/'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek',
                  /*port 4*/'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.',
                  /*port 5*/'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];

  //-----------------list of scripts to run-----------------
  const script = ['varhack.js'];
  var hl = ns.getHackingLevel();
  var serverl = server.length;
  var scriptl = script.length;
  var programs = 0
  var reset = ns.args[0];
  //--------------reset if 4 is entered in arg 0--------------
  if (reset == 4) {
    ns.killall('home');
    for (var i = 0; i < serverl; i++) {
      var target = server[Number(i)];
      ns.rm('hacktarget.txt',String([target]))
      ns.killall(target);
    }
  }
  //----Math to figure out how many ports are possible----------
  if (ns.fileExists("BruteSSH.exe", "home")) {
    programs = programs + 1
  }
  if (ns.fileExists("FTPCrack.exe", "home")) {
    programs = programs + 1
  }
  if (ns.fileExists("relaySMTP.exe", "home")) {
    programs = programs + 1
  }
  if (ns.fileExists("HTTPWorm.exe", "home")) {
    programs = programs + 1
  }
  if (ns.fileExists("SQLInject.exe", "home")) {
    programs = programs + 1
  } 
  //---Finds the highest value target for the scripts to attack--
  for (var i = 0; i < serverl; i++) {

    var target = server[Number(i)];
    var smoney = ns.getServerMaxMoney(target)
    var shackinglevel = ns.getServerRequiredHackingLevel(target)
    var highvalue = 0

    if (smoney > highvalue && shackinglevel <= hl) {
      
      highvalue = smoney
      var name = i
    }
  }
  var extarget = server[Number(name)];
  ns.tprint('Highest value target:' + " " + extarget)
  ns.write('hacktarget.txt',extarget,'w');
//----------------------------------------------------------------
//bulk of operations
  for (var i = 0; i < serverl; i++) {
    var target = server[Number(i)];
    var ram = ns.getServerMaxRam(target);
    var shl = ns.getServerRequiredHackingLevel(target);
    var ports = ns.getServerNumPortsRequired(target);

    //runs all the vulnerabilities as well as nukes the target
    if (ports <= programs && shl <= hl) {
      if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
      }
      if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target);
      }
      if (ns.fileExists("relaySMTP.exe", "home")) {
        ns.relaysmtp(target);
      }
      if (ns.fileExists("HTTPWorm.exe", "home")) {
        ns.httpworm(target);
      }
      if (ns.fileExists("SQLInject.exe", "home")) {
        ns.sqlinject(target);
      }
      ns.nuke(target);

      // moves files to target server
      for (var s = 0; s < scriptl; s++) {

        ns.scp(script[Number(s)], target);
        ns.scp('hacktarget.txt',target);
      }
    }  
    // execute the scripts that will run the attacks
    if (ram > 0 && hl > shl) {
      var maxram = ns.getServerMaxRam(target);
      var homeram = ns.getServerMaxRam('home');
      var scrram = ns.getScriptRam(script[0]);
      var q = (Math.floor(maxram / scrram));
      var hq = (Math.floor(homeram / scrram - ns.getScriptRam('no2.js')));
      ns.exec(script[0], target, Number(q));
      ns.run(script[0],Number(hq));
    }
  }
}
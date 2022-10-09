  /**  @param {import(".").NS} ns */

export async function main(ns) {
  
  const server = ['n00dles','foodnstuff','sigma-cosmetics','joesguns','hong-fang-tea','nectar-net','harakiri-sushi',
                  'max-hardware','neo-net','CSEC','iron-gym','zer0',
                  'johnson-ortho','silver-helix','avmnite-02h','omega-net','crush-fitness','phantasy','the-hub',
                  'summit-uni','rho-construction','millenium-fitness','I.I.I.I','rothman-uni','catalyst','computek',
                  'syscore','global-pharm','nova-med','univ-energy','zb-def','unitalife','lexo-corp','snap-fitness','alpha-ent','aevum-police','applied-energetics','run4theh111z','.',
                  'galactic-cyber','aerocorp','omnia','icarus','deltaone','solaris','defcomm','infocomm','zeus-med','taiyang-digital','zb-institute','darkweb','titan-labs','helios','vitalife','4sigma','kuai-gong','omnitek','nwo','powerhouse-fitness','megacorp','stormtech','microdyne','fulcrumtech','b-and-a','blade','clarkinc','ecorp','fulcrumassets','The-Cave','w0r1d_d43m0n'];

  //list of scripts to run
  const script = ['foo.js','iron.js','joth.js','zero.js','varhack.js'];
  const scripttarget = ['foodnstuff','iron-gym','rothman-uni'];
  var hl = ns.getHackingLevel();

  var serverl = server.length;
  var scriptl = script.length;
  var programs = 0;
  var reset = ns.args[0];
 
  //reset if 4 is entered in arg 0
   
  if (reset == 4) {
    ns.killall('home');
    for (var i = 0; i < serverl; i++) {
      var target = server[Number(i)];
      ns.killall(target);
    }
  }

  //------------------------------------------------
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

  //Finds the highest value target for the scripts to attack
  //--------------------------------------------------------------
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

    if (ram > 0 && hl > shl) {
      var m = ns.getServerMaxRam(target);
      var s = ns.getScriptRam(script[4]);
      var q = (Math.floor(m / s));
      ns.exec(script[4], target, Number(q));
    }
    
  }


  // This is legacy code and needs updating
  //-----------------------------------------------------------------------------------------------------------------
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
  //-----------------------------------------------------------------------------------------------------------------
 
  var maxram = ns.getServerMaxRam(target);
  var scrram = ns.getScriptRam(script[2]);
  var q = (Math.floor((maxram / scrram) - (ns.getScriptRam('no2.js'))));

  //ns.exec(script[0], target, Number(q));


} 


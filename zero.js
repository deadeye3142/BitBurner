/** @param {NS} ns */
export async function main(ns) {
	var target = "zer0";
	var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
	var securityThresh = ns.getServerMinSecurityLevel(target) + 7;


    while(true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
        
        await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
        
        await ns.grow(target);
    } else {
        
        await ns.hack(target);
    }
    }
}
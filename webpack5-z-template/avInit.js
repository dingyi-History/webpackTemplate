import { AV }  from 'avoscloud-sdk'

let AVConfig = {
    appId   : '9xUJPYdRapBYsVHWVSsClVpQ-gzGzoHsz',
    appKey  : 'hMl7mjT1CDMxua7IbVa6CPx2'
}

// AVOSCLOUD INITIALIZATION

AV.initialize(AVConfig.appId, AVConfig.appKey);

// LeanCloud
window.Application   = AV.Object.extend('Application');
window.Meetup        = AV.Object.extend('Meetup');
window.Speech        = AV.Object.extend('Speech');
window.Speaker       = AV.Object.extend('Speaker');

module.exports = AV;

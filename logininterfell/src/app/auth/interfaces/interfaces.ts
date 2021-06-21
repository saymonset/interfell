export interface UsuarioResponse {
    ok?:              boolean;
    serviceData?:        null;
    userAvailability?:   null;
    sessionTokenBck?:    string;
    firstName?:          string;
    lastName?:           string;
    email?:              string;
    active?:             boolean;
    passwordHash?:       null;
    sessionTokenWeb?:    null;
    phoneNumber?:        string;
    agreedToTermsOfUse?: boolean;
    whereKnownUs?:       null;
    lastLogin?:          number;
    sessionTokenCli?:    null;
    sessionTokenPro?:    null;
    funds?:              number;
    tokenFacebook?:      null;
    tokenGoogle?:        null;
    tokensIonic?:        null;
    photoPath?:          null;
    photoExt?:           null;
    userRole?:           UserRole;
    sync?:               number;
    usedCodeList?:       string;
    referrer?:           string;
    rut?:                null;
    domain?:             string;
    typeProfessional?:   null;
    tutenSubRole?:       null;
    userId?:             null;
    appVersion?:         null;
    estatus?:            null;
}

export interface UserRole {
    userRole?:         string;
    description?:      string;
    fatherUserRole?:   null;
    domain?:           string;
    estatus?:          null;
    defaultNamespace?: null;
    id?:               number;
}
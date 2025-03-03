export interface AttrDef {
  name: string; type: string[]; many?: boolean;
}
export const Elements: Record<string, (string | AttrDef)[]> = {
  adress: ['kontakt', 'utdelningsadr', 'postadr', 'tel'],
  bkod: ['SNI-kod'],
  dim: ['dimensionsnr', 'namn'],
  enhet: ['kontonr', 'enhet'],
  flagga: ['x'],
  fnamn: ['företagsnamn'],
  fnr: ['företagsid'],
  format: ['PC8'],
  ftyp: ['Företagstyp'],
  gen: ['datum', 'sign'],
  ib: ['årsnr', 'konto', 'saldo', 'kvantitet'],
  konto: ['kontonr', 'kontonamn'],
  kptyp: ['typ'],
  ktyp: ['kontonr', 'kontotyp'],
  objekt: ['dimensionsnr', 'objektnr', 'objektnamn'],
  oib: ['årsnr', 'konto', { name: 'objekt', type: ['dimensionsnr', 'objektnr'] }, 'saldo', 'kvantitet'],
  omfattn: ['datum'],
  orgnr: ['orgnr', 'förvnr', 'verknr'],
  oub: ['årsnr', 'konto', { name: 'objekt', type: ['dimensionsnr', 'objektnr'] }, 'saldo', 'kvantitet'],
  pbudget: ['årsnr', 'period', 'konto', { name: 'objekt', type: ['dimensionsnr', 'objektnr'] }, 'saldo', 'kvantitet'],
  program: ['programnamn', 'version'],
  prosa: ['text'],
  psaldo: ['årsnr', 'period', 'konto', { name: 'objekt', type: ['dimensionsnr', 'objektnr'] }, 'saldo', 'kvantitet'],
  rar: ['årsnr', 'start', 'slut'],
  res: ['års', 'konto', 'saldo', 'kvantitet'],
  sietype: ['typnr'],
  sru: ['konto', 'SRU-kod'],
  taxar: ['år'],
  trans: ['kontonr', { name: 'objektlista', type: ['dimensionsnr', 'objektnr'], many: true }, 'belopp', 'transdat', 'transtext', 'kvantitet', 'sign'],
  rtrans: ['kontonr', { name: 'objektlista', type: ['dimensionsnr', 'objektnr'], many: true }, 'belopp', 'transdat', 'transtext', 'kvantitet', 'sign'],
  btrans: ['kontonr', { name: 'objektlista', type: ['dimensionsnr', 'objektnr'], many: true }, 'belopp', 'transdat', 'transtext', 'kvantitet', 'sign'],
  ub: ['årsnr', 'konto', 'saldo', 'kvantitet'],
  underdim: ['dimensionsnr', 'namn', 'superdimension'],
  valuta: ['valutakod'],
  ver: ['serie', 'vernr', 'verdatum', 'vertext', 'regdatum', 'sign']
};

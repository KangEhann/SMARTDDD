/* SCRIPT SMARTDDD - FULLY CONNECTED (ADMIN, EXPORT, CALC, IMPORT) */
'use strict';

// 1. DATA MASTER (372 DATA TETAP LENGKAP)
const INITIAL_ANTIBIOTICS = [
  { id:1, nama_brand:'AmiKASIN Sulfat Injection 250 mg/2mL', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:2, nama_brand:'AmiKASIN Sulfat Injection 250 mg/2mL (B)', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:3, nama_brand:'AmiKASIN Sulfat Injection 500 mg/2mL', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:4, nama_brand:'AmiKASIN Sulfat Injection 500 mg/2mL (B)', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:5, nama_brand:'AmiOSIN Injection 500 mg/2 mL - 2mL', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:6, nama_brand:'MikaSIN Injection 250mg/2mL - 2 mL', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:7, nama_brand:'MiKAsin Injection 500mg/2mL - 2 mL', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:8, nama_brand:'Glybotic Injection 250 mg', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:9, nama_brand:'Glybotic Injection 500 mg', nama_generik:'Amikacin', kode_atc:'J01GB06', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Access' },
  { id:10, nama_brand:'AmOXSan Capsule 250 mg', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:11, nama_brand:'AmoxSAN Capsule 500 mg', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:12, nama_brand:'AmoxSAN Drops 100mg/mL - 15 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:13, nama_brand:'AmoxSAN Dry Syrup 125mg/5mL - 60 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:14, nama_brand:'AmoxSAN Forte Dry Syrup 250mg/5mL - 60 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:15, nama_brand:'AmoxyCILLIN Caplet 250 Mg', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:16, nama_brand:'AmoxyCILLIN Caplet 500 mg (B)', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:17, nama_brand:'AmoxyCILLIN Caplet 500 Mg', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:18, nama_brand:'AmoxyCILLIN Drop 100mg/mL - 15 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:19, nama_brand:'AmoxyCILLIN Dry Syrup 250 mg/5mL - 60 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:20, nama_brand:'AmoxyCILLIN Syrup 125 mg/5 mL - 60 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:21, nama_brand:'LEOmoxyl Capsule 500 mg', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:22, nama_brand:'LEOmoxyl Dry Syrup 125mg/5mL - 60 mL', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:23, nama_brand:'AmoxSAN Injection 1 g', nama_generik:'Amoxicillin', kode_atc:'J01CA04', golongan:'Penisilin', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:24, nama_brand:'Co Amoxiclav Tablet 625 mg', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:25, nama_brand:'Co Amoxiclav Tablet 625 mg (B)', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:26, nama_brand:'Co Amoxiclav Dry Syrup 125mg/5ml-60mL', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:27, nama_brand:'Co Amoxiclav Injection 1 g (B)', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:28, nama_brand:'ClaNEKSI Injection 1 g', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:29, nama_brand:'ClaNEKSI Caplet 625 mg', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:30, nama_brand:'ClaNEKSI Dry Syrup 125/5mL, 31.25/5mL - 60 mL', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:31, nama_brand:'ClaNEKSI Forte Dry Syrup 250/5mL, 62.5/5mL - 60 mL', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:32, nama_brand:'Co Amoxiclav Injection 1g', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:33, nama_brand:'DexyCLAV Dry Syrup 125 mg/5 mL - 60 mL', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:34, nama_brand:'DexyCLAV Forte Dry Syrup 250 mg/5 mL - 60 mL', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:35, nama_brand:'Dexyclav Forte Tablet 625 mg', nama_generik:'Amoxicillin-Clavulanate', kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:36, nama_brand:'BacTESYN Tablet 375 mg', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:37, nama_brand:'BacTESyn Injection 1.5 g', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:6.0, rute:'Parenteral', aware:'Access' },
  { id:38, nama_brand:'BacTESyn Injection 750 mg', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:6.0, rute:'Parenteral', aware:'Access' },
  { id:39, nama_brand:'Ampicillin Sulbactam Injection 750 mg', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:6.0, rute:'Parenteral', aware:'Access' },
  { id:40, nama_brand:'Ampicillin Sulbactam Injection 1.5 g', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:6.0, rute:'Parenteral', aware:'Access' },
  { id:41, nama_brand:'Ampicillin Sulbactam Injection 1.5 g (B)', nama_generik:'Ampicillin-Sulbactam', kode_atc:'J01CA01', golongan:'Penisilin', satuan:'vial', ddd_who:6.0, rute:'Parenteral', aware:'Access' },
  { id:42, nama_brand:'Ecalta Injection 100 mg', nama_generik:'Anidulafungin', kode_atc:'J02AX06', golongan:'Antijamur Echinocandin', satuan:'vial', ddd_who:0.1, rute:'Parenteral', aware:'Watch' },
  { id:43, nama_brand:'AZITHROmycin Dry Syrup 200mg/5mL - 15 mL', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:44, nama_brand:'AZITHROmycin Dry Syrup 200mg/5mL - 15 mL (B)', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:45, nama_brand:'AZITHROmycin Tablet 500 mg (B)', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:46, nama_brand:'AZITHROmycin Tablet 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:47, nama_brand:'AzoMAX Dry Syrup 200 mg/5 mL - 15 mL', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:48, nama_brand:'Aztrin Dry Syrup 200mg/5mL - 15 mL', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:49, nama_brand:'Aztrin Tablet 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:50, nama_brand:'ZiBRAmax Dry Syrup 200 mg/5 mL - 15 mL', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:51, nama_brand:'ZiBRAmax Tablet 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:52, nama_brand:'Zithrax Tablet 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:53, nama_brand:'ZITHROmax Dry Syrup 200mg/5mL - 15 mL', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:54, nama_brand:'ZITHROmax Tablet 250 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:55, nama_brand:'ZiTHROmax Tablet 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Watch' },
  { id:56, nama_brand:'Azivol Injection 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Parenteral', aware:'Watch' },
  { id:57, nama_brand:'Azithromycin Injection 500mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Parenteral', aware:'Watch' },
  { id:58, nama_brand:'ZITHROmax Injection 500 mg', nama_generik:'Azithromycin', kode_atc:'J01FA10', golongan:'Makrolid', satuan:'vial', ddd_who:0.3, rute:'Parenteral', aware:'Watch' },
  { id:59, nama_brand:'Benzatin Benzyl Penicillin Injection 2.400.000 IU', nama_generik:'Benzathine-Benzylpenicillin', kode_atc:'J01CE08', golongan:'Penisilin', satuan:'IU', ddd_who:3.6, rute:'Parenteral', aware:'Access' },
  { id:60, nama_brand:'CeFADROxil  Syrup 125mg/5mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:61, nama_brand:'CeFADROxil  Syrup 250mg/5mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:62, nama_brand:'CeFADROxil Capsule 500 mg', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:63, nama_brand:'CeFADROxil Capsule 500 mg (B)', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:64, nama_brand:'CeFAT Capsule 500 mg', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:65, nama_brand:'CeFAT Dry Syrup 125 mg/5 mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:66, nama_brand:'CeFAT Forte Dry Syrup 250mg/5mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:67, nama_brand:'Lapicef Capsule 500 mg', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:68, nama_brand:'Lapicef Syrup 250 mg/5 mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:69, nama_brand:'Qcef Capsule 500 mg', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:70, nama_brand:'QCef Dry Syrup 125mg/5mL - 60 mL', nama_generik:'Cefadroxil', kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:71, nama_brand:'Cefazol Injection 1 g', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:72, nama_brand:'Cefazoline Injection 1 g', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:73, nama_brand:'Cefazoline Injection 1 g (B)', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:74, nama_brand:'Meiact Granul 10% 30 mg', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Access' },
  { id:75, nama_brand:'Meiact Granul 10% 50 mg', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Access' },
  { id:76, nama_brand:'Tafoxil Tablet 200mg', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Access' },
  { id:77, nama_brand:'Meiact Tablet 200mg', nama_generik:'Cefazoline', kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Access' },
  { id:78, nama_brand:'CeFEPime Injection 1 g (B)', nama_generik:'Cefepime', kode_atc:'J01DE01', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Reserve' },
  { id:79, nama_brand:'CeFEPime Injection 1 g', nama_generik:'Cefepime', kode_atc:'J01DE01', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Reserve' },
  { id:80, nama_brand:'DaryaCEF Injection 1 g', nama_generik:'Cefepime', kode_atc:'J01DE01', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Reserve' },
  { id:81, nama_brand:'MaXIcef Injection 1 g', nama_generik:'Cefepime', kode_atc:'J01DE01', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Reserve' },
  { id:82, nama_brand:'CeFILA dry syrup 100 mg/5 mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:83, nama_brand:'CeFIXime Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:84, nama_brand:'CeFIXime Capsule 100 mg (B)', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:85, nama_brand:'CeFIXime Capsule 200 mg (B)', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:86, nama_brand:'CeFIXime Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:87, nama_brand:'CeFIXime Dry Syrup 100mg/5mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:88, nama_brand:'CeFIXime Dry Syrup 100mg/5mL (B)', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:89, nama_brand:'CefSPAn Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:90, nama_brand:'CefSPAn Dry Syrup 100mg/5mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:91, nama_brand:'CefSPAn Tablet 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:92, nama_brand:'Ceptik Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:93, nama_brand:'FiXAcep Drops 30mg/1mL - 15 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:94, nama_brand:'FIXIphar Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:95, nama_brand:'FIXIphar Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:96, nama_brand:'FIXIphar Dry Syrup 100mg/5mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:97, nama_brand:'FIXIphar Dry Syrup 100mg/5mL - 60 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:98, nama_brand:'LanFIX Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:99, nama_brand:'NUcef Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:100, nama_brand:'Nucef Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:101, nama_brand:'Nixaven Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:102, nama_brand:'Nixaven Capsule 200 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:103, nama_brand:'NUcef Dry Syrup 100mg/5mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:104, nama_brand:'Sporetik Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:105, nama_brand:'Starcef Capsule 100 mg', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:106, nama_brand:'Starcef Syrup 100 mg/5 mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:107, nama_brand:'CepTIK Dry Syrup 100mg/5mL - 30 mL', nama_generik:'Cefixime', kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:108, nama_brand:'Zerbaxa Injection 1.5 g', nama_generik:'Ceftolozane', kode_atc:'J01D154', golongan:'Sefalosporin Gen-5', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:109, nama_brand:'CefoPERazone  Injeksi 1 g (B)', nama_generik:'Cefoperazone', kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:110, nama_brand:'CefoPERazone  Injection 1 g', nama_generik:'Cefoperazone', kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:111, nama_brand:'Cefophar Injection 1 g', nama_generik:'Cefoperazone', kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:112, nama_brand:'CeROpid Injection 1 g', nama_generik:'Cefoperazone', kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:113, nama_brand:'StaBIXin Injection 1 g', nama_generik:'Cefoperazone', kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:114, nama_brand:'CeFOBActam Injection 1 g', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:115, nama_brand:'CefoPERazone SULBactam Injection 1 g', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:116, nama_brand:'CefoPERazone SULBactam Injection 1 g (B)', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:117, nama_brand:'Nubac Injection 1 g', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:118, nama_brand:'Bactraz Injection 1 g', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:119, nama_brand:'StaBACtam Injection 1 g', nama_generik:'Cefoperazone-Sulbactam', kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:120, nama_brand:'CefoTAXIME Injection 1 g', nama_generik:'Cefotaxime', kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:121, nama_brand:'CefoTAXIME Injeksi 1 g (B)', nama_generik:'Cefotaxime', kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:122, nama_brand:'ClaCEF Injection 1 g', nama_generik:'Cefotaxime', kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:123, nama_brand:'GOFOran Injection 1 g', nama_generik:'Cefotaxime', kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:124, nama_brand:'Starclaf Injection 1 g', nama_generik:'Cefotaxime', kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:125, nama_brand:'CeFIR Injection 1 g', nama_generik:'Cefpirome', kode_atc:'J01DE02', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:126, nama_brand:'CefPIRome Injection 1 g', nama_generik:'Cefpirome', kode_atc:'J01DE02', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:127, nama_brand:'Nufirom Injection 1 g', nama_generik:'Cefpirome', kode_atc:'J01DE02', golongan:'Sefalosporin Gen-4', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:128, nama_brand:'CefTAZidime Injection 1 g', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:129, nama_brand:'CefTAZidime Injeksi 1 g (B)', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:130, nama_brand:'Extimon Injection 1 g', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:131, nama_brand:'Forta Injection 1 g', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:132, nama_brand:'FORtum Injection 1 g', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:133, nama_brand:'Zibac Injection 1 g', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:134, nama_brand:'Zavicefta Injection 2g/500mg - 20 mL', nama_generik:'Ceftazidime', kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:135, nama_brand:'Cefim Injection 1 g', nama_generik:'Ceftizoxime', kode_atc:'J01DD07', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:136, nama_brand:'CeFIZox Injection 1 g', nama_generik:'Ceftizoxime', kode_atc:'J01DD07', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:137, nama_brand:'CefTIZOxime Injection 1 g', nama_generik:'Ceftizoxime', kode_atc:'J01DD07', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:138, nama_brand:'Tizos Injection 1 g', nama_generik:'Ceftizoxime', kode_atc:'J01DD07', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:4.0, rute:'Parenteral', aware:'Watch' },
  { id:139, nama_brand:'Broadced Injection 1 g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:140, nama_brand:'CefTRIAXone Injeksi 1 g (B)', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:141, nama_brand:'CefTRIAXone Injection 1 g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:142, nama_brand:'CefXON Injection 1g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:143, nama_brand:'CePHAflox Injection 1 g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:144, nama_brand:'STARxon Injection 1 g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:145, nama_brand:'Terfacef Injection 1 g', nama_generik:'Ceftriaxone', kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:146, nama_brand:'Anbacim Caplet 500 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:147, nama_brand:'CefuROXime Tablet 500 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:148, nama_brand:'CeLOCId Tablet 500 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:149, nama_brand:'ShaROX Tablet 500 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:150, nama_brand:'Zinnat Tablet 500mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:151, nama_brand:'Anbacim Injection 1 g', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Watch' },
  { id:152, nama_brand:'CefUROXime Sodium Injection 750 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Watch' },
  { id:153, nama_brand:'Celocid Injection 750 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Watch' },
  { id:154, nama_brand:'Oxtercid Injection 750 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Watch' },
  { id:155, nama_brand:'ShaROX Injection 750 mg', nama_generik:'Cefuroxime', kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Watch' },
  { id:156, nama_brand:'Colsancetine Capsule 250 mg', nama_generik:'Chloramphenicol', kode_atc:'J01BA01', golongan:'Amfenikol', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Access' },
  { id:157, nama_brand:'Kalmicetine Capsule 250 mg', nama_generik:'Chloramphenicol', kode_atc:'J01BA01', golongan:'Amfenikol', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Access' },
  { id:158, nama_brand:'Colsancetine Syrup 125mg/5mL - 60 mL', nama_generik:'Chloramphenicol', kode_atc:'J01BA01', golongan:'Amfenikol', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Access' },
  { id:159, nama_brand:'ChloRAMEX Injection 1 g', nama_generik:'Chloramphenicol', kode_atc:'J01BA01', golongan:'Amfenikol', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:160, nama_brand:'Colsancetine Injection 1 g', nama_generik:'Chloramphenicol', kode_atc:'J01BA01', golongan:'Amfenikol', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Access' },
  { id:161, nama_brand:'Imitatin Injection', nama_generik:'Cilastatin-Imipenem', kode_atc:'J01DH51', golongan:'Karbapenem', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:162, nama_brand:'Pelastin Injection 500mg/500mg', nama_generik:'Cilastatin-Imipenem', kode_atc:'J01DH51', golongan:'Karbapenem', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:163, nama_brand:'Imiclast Injection 500mg/500mg', nama_generik:'Cilastatin-Imipenem', kode_atc:'J01DH51', golongan:'Karbapenem', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Watch' },
  { id:164, nama_brand:'Baquinor Caplet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:165, nama_brand:'CIFLos Tablet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:166, nama_brand:'CIPROfloxacin Tablet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:167, nama_brand:'CIPROfloxacin Tablet 500 mg (B)', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:168, nama_brand:'CiproXIN Tablet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:169, nama_brand:'Civell MR Tablet 1000 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:170, nama_brand:'Quinobiotic Tablet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:171, nama_brand:'Renator Tablet 500 mg', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Watch' },
  { id:172, nama_brand:'Baquinor Infusion 200 mg/100 mL', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.8, rute:'Parenteral', aware:'Watch' },
  { id:173, nama_brand:'CIPROfloxacin Infusion 200 mg/100 mL - 100 mL', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.8, rute:'Parenteral', aware:'Watch' },
  { id:174, nama_brand:'CIPROfloxacin Infusion 200 mg/100 mL -100 mL (B)', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.8, rute:'Parenteral', aware:'Watch' },
  { id:175, nama_brand:'CiproXIN IV Infusion 200 mg/100 mL -100 mL', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.8, rute:'Parenteral', aware:'Watch' },
  { id:176, nama_brand:'Civell Infusion 200mg/100mL - 100 mL', nama_generik:'Ciprofloxacin', kode_atc:'J01MA02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.8, rute:'Parenteral', aware:'Watch' },
  { id:177, nama_brand:'Abbotic Suspension 250mg/5mL - 50 mL', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:178, nama_brand:'Abbotic Syrup 125 mg/5 mL - 30 mL', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:179, nama_brand:'Bicrolid Tablet 500 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:180, nama_brand:'Abbotic Tablet 500 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:181, nama_brand:'Abbotic XL Tablet 500 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:182, nama_brand:'Bicrolid Caplet 500 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:183, nama_brand:'Bicrolid Tablet 250 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:184, nama_brand:'CLARIthromycin Tablet 500 mg', nama_generik:'Clarithromycin', kode_atc:'J01FA09', golongan:'Makrolid', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:185, nama_brand:'Clindamycin Capsule 150 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:186, nama_brand:'Clindamycin Capsule 300 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:187, nama_brand:'Clindamycin Capsule 300 mg (B)', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:188, nama_brand:'Dalacin C Capsule 300 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:189, nama_brand:'Dalacin-C Capsule 150 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:190, nama_brand:'Indanox Capsule 300 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:191, nama_brand:'ProLIC Capsule 150 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:192, nama_brand:'Prolic Capsule 300 mg', nama_generik:'Clindamycin', kode_atc:'J01FF01', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Access' },
  { id:193, nama_brand:'Colistine Tablet 1.500.000 IU', nama_generik:'Colistin', kode_atc:'J01XB01', golongan:'Polimiksin', satuan:'IU', ddd_who:9.0, rute:'Oral', aware:'Reserve' },
  { id:194, nama_brand:'Dibekacin meiji Injection 100 mg/2 mL -2 mL', nama_generik:'Dibekacin', kode_atc:'J01GB09', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.14, rute:'Parenteral', aware:'Reserve' },
  { id:195, nama_brand:'(B) Dibekacin meiji Injeksi 100 mg/2 mL', nama_generik:'Dibekacin', kode_atc:'J01GB09', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.14, rute:'Parenteral', aware:'Reserve' },
  { id:196, nama_brand:'DORIpenem Injection 500 mg', nama_generik:'Doripenem', kode_atc:'J01DH04', golongan:'Karbapenem', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Reserve' },
  { id:197, nama_brand:'Daryaven Injection 500 mg', nama_generik:'Doripenem', kode_atc:'J01DH04', golongan:'Karbapenem', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Reserve' },
  { id:198, nama_brand:'Doxycycline Capsule 100 mg', nama_generik:'Doxycycline', kode_atc:'J01AA02', golongan:'Tetrasiklin', satuan:'vial', ddd_who:0.1, rute:'Oral', aware:'Access' },
  { id:199, nama_brand:'Doxycycline Capsule 100 mg (B)', nama_generik:'Doxycycline', kode_atc:'J01AA02', golongan:'Tetrasiklin', satuan:'vial', ddd_who:0.1, rute:'Oral', aware:'Access' },
  { id:200, nama_brand:'InterDOXin Capsule 100mg', nama_generik:'Doxycycline', kode_atc:'J01AA02', golongan:'Tetrasiklin', satuan:'vial', ddd_who:0.1, rute:'Oral', aware:'Access' },
  { id:201, nama_brand:'ERYsanbe Chewable Tablet 200 mg', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:202, nama_brand:'Erysanbe Dry  Syrup 200 mg/5 mL - 60 mL', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:203, nama_brand:'Erysanbe Tablet 500 mg', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:204, nama_brand:'Erythromycin Capsule 500 mg', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:205, nama_brand:'Erythromycin Capsule 500 mg (B)', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:206, nama_brand:'Erythromycin Dry  Syrup 200 mg/5 mL - 60 mL', nama_generik:'Erythromycin', kode_atc:'J01FA01', golongan:'Makrolid', satuan:'vial', ddd_who:1.0, rute:'Oral', aware:'Access' },
  { id:207, nama_brand:'Ethambutol Tablet 500 mg', nama_generik:'Ethambutol', kode_atc:'J04AK02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:208, nama_brand:'Ethambutol Tablet 500 mg (B)', nama_generik:'Ethambutol', kode_atc:'J04AK02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:209, nama_brand:'ARsitam Tablet 500 mg', nama_generik:'Ethambutol', kode_atc:'J04AK02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:210, nama_brand:'SanTIBI Tablet 500', nama_generik:'Ethambutol', kode_atc:'J04AK02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:211, nama_brand:'Diflucan Capsule 150 mg', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:212, nama_brand:'Diflucan Capsule 50 mg', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:213, nama_brand:'FLUconazole Capsule 150 mg', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:214, nama_brand:'FLUconazole Capsule 150 mg (B)', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:215, nama_brand:'Govazol Capsule 150 mg', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:216, nama_brand:'FLUconazole Injection 200mg/100 mL', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Parenteral', aware:'Anti-jamur' },
  { id:217, nama_brand:'Diflucan Injection 2 mg/mL - 100 mL', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Parenteral', aware:'Anti-jamur' },
  { id:218, nama_brand:'FLUconazole Injection 200 mg/100mL - 100 mL (B)', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Parenteral', aware:'Anti-jamur' },
  { id:219, nama_brand:'FLUconazole Injection 200mg/100 mL - 100 mL', nama_generik:'Fluconazole', kode_atc:'J02AC01', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Parenteral', aware:'Anti-jamur' },
  { id:220, nama_brand:'Fosmicin Injection 1 g', nama_generik:'Fosfomycin', kode_atc:'J01XX01', golongan:'Antibiotik Lain', satuan:'vial', ddd_who:8.0, rute:'Parenteral', aware:'Watch' },
  { id:221, nama_brand:'Fosfomycin Sodium Injection 2 g', nama_generik:'Fosfomycin', kode_atc:'J01XX01', golongan:'Antibiotik Lain', satuan:'vial', ddd_who:8.0, rute:'Parenteral', aware:'Watch' },
  { id:222, nama_brand:'Fosmicin Injection 2 g', nama_generik:'Fosfomycin', kode_atc:'J01XX01', golongan:'Antibiotik Lain', satuan:'vial', ddd_who:8.0, rute:'Parenteral', aware:'Watch' },
  { id:223, nama_brand:'Monuril Granule 3 g', nama_generik:'Fosfomycin', kode_atc:'J01XX01', golongan:'Antibiotik Lain', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Watch' },
  { id:224, nama_brand:'ExelFos Sachet 3 g', nama_generik:'Fosfomycin', kode_atc:'J01XX01', golongan:'Antibiotik Lain', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Watch' },
  { id:225, nama_brand:'Gentamicin Injeksi 80 mg/2mL (B)', nama_generik:'Gentamicin', kode_atc:'J01GB03', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:226, nama_brand:'Gentamicin Injection 40 mg/mL - 2mL', nama_generik:'Gentamicin', kode_atc:'J01GB03', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:227, nama_brand:'Gentamicin Injection 80 mg/2mL', nama_generik:'Gentamicin', kode_atc:'J01GB03', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:228, nama_brand:'Gentamicin Injeksi 40 mg/mL - 2mL (B)', nama_generik:'Gentamicin', kode_atc:'J01GB03', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:229, nama_brand:'Sagestam Injection  40 mg/mL - 2 mL', nama_generik:'Gentamicin', kode_atc:'J01GB03', golongan:'Aminoglikosida', satuan:'vial', ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:230, nama_brand:'FULcin Tablet 500 mg', nama_generik:'Griseofulvin', kode_atc:'D01BA01', golongan:'Antijamur', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Anti-jamur' },
  { id:231, nama_brand:'Fungistop Tablet 500 mg', nama_generik:'Griseofulvin', kode_atc:'D01BA01', golongan:'Antijamur', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Anti-jamur' },
  { id:232, nama_brand:'Griseofulvin Tablet 125 mg', nama_generik:'Griseofulvin', kode_atc:'D01BA01', golongan:'Antijamur', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Anti-jamur' },
  { id:233, nama_brand:'Griseofulvin Tablet 500 mg', nama_generik:'Griseofulvin', kode_atc:'D01BA01', golongan:'Antijamur', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Anti-jamur' },
  { id:234, nama_brand:'Cresemba Capsule 100 mg', nama_generik:'Isavuconazonium sulfat', kode_atc:'J02AC04', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:235, nama_brand:'Cresemba Injection 200mg', nama_generik:'Isavuconazonium sulfat', kode_atc:'J02AC04', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Anti-jamur' },
  { id:236, nama_brand:'IsoNIAZid Tablet 100 mg', nama_generik:'Isoniazid', kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:237, nama_brand:'IsoNIAZid Tablet 300 mg', nama_generik:'Isoniazid', kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:238, nama_brand:'IsoNIAZid Tablet 300 mg (B)', nama_generik:'Isoniazid', kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:239, nama_brand:'TB Vit 6 Tablet', nama_generik:'Isoniazid', kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:240, nama_brand:'PehaDOXIN Forte Tablet I - 400 mg; B6 - 10 mg', nama_generik:'Isoniazid', kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.3, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:241, nama_brand:'Forcanox Capsule 100 mg', nama_generik:'Itraconazole', kode_atc:'J02AC02', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:242, nama_brand:'ITRAconazole Capsule 100 mg', nama_generik:'Itraconazole', kode_atc:'J02AC02', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.2, rute:'Oral', aware:'Anti-jamur' },
  { id:244, nama_brand:'Kanamycin Meiji Injection 1 g', nama_generik:'Kanamycin', kode_atc:'J01GB04', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Watch' },
  { id:245, nama_brand:'Kanamycin Meiji Injection 2 g', nama_generik:'Kanamycin', kode_atc:'J01GB04', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Watch' },
  { id:246, nama_brand:'FungASOL Tablet 200 mg', nama_generik:'Ketoconazole', kode_atc:'J02AB02', golongan:'Antijamur Imidazol', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-jamur' },
  { id:247, nama_brand:'KetoCONAzole Tablet 200 mg', nama_generik:'Ketoconazole', kode_atc:'J02AB02', golongan:'Antijamur Imidazol', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-jamur' },
  { id:248, nama_brand:'MycoRAL Tablet 200 mg', nama_generik:'Ketoconazole', kode_atc:'J02AB02', golongan:'Antijamur Imidazol', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-jamur' },
  { id:249, nama_brand:'Volox Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J02AB02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:250, nama_brand:'CRAvit Tablet 500 Mg', nama_generik:'Levofloxacin', kode_atc:'J02AB02', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:251, nama_brand:'CRAvit Tablet 750 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:252, nama_brand:'Lefos Tablet 750 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:253, nama_brand:'LEFos Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:254, nama_brand:'LevoCIN Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:255, nama_brand:'LEVOfloxacin Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:256, nama_brand:'LEVOfloxacin Tablet 500 mg (B)', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:257, nama_brand:'LEVOfloxacin Tablet 750 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:258, nama_brand:'Levofloxacin Tablet 750 mg (B)', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:259, nama_brand:'LevoRES Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:260, nama_brand:'Nislev Tablet 500 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:261, nama_brand:'Nislev Tablet 750 mg', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Oral', aware:'Watch' },
  { id:262, nama_brand:'CRAvit IV Infusion 500 mg/100 mL -100 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:263, nama_brand:'CRAvit IV Infusion 750 mg/150 mL -150 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:264, nama_brand:'Lefos Infusion 750 mg/150 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:265, nama_brand:'Levocin Infusion 5mg/1 mL - 100 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:266, nama_brand:'LEVOfloxacin  Infusion 500 mg/100 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:267, nama_brand:'LEVOfloxacin  Infusion 500 mg/100 mL (B)', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:268, nama_brand:'Levofloxacin IV Infusion 750mg/150mL -150 mL (B)', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:269, nama_brand:'LEVOfloxacin Infusion 750mg/150mL - 150 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:270, nama_brand:'Levores Infusion 750mg/150mL - 150 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:271, nama_brand:'Nislev Infusion 500 mg/100 mL - 100 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:272, nama_brand:'Nislev Infusion 750mg/150mL - 150 mL', nama_generik:'Levofloxacin', kode_atc:'J01MA12', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.5, rute:'Parenteral', aware:'Watch' },
  { id:273, nama_brand:'LincoCIN Capsule 500 mg', nama_generik:'Lincomycin', kode_atc:'J01FF02', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.8, rute:'Oral', aware:'Watch' },
  { id:274, nama_brand:'LincoMYCIN Capsule 500 mg', nama_generik:'Lincomycin', kode_atc:'J01FF02', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.8, rute:'Oral', aware:'Watch' },
  { id:275, nama_brand:'LincoPHAR Capsule 500 mg', nama_generik:'Lincomycin', kode_atc:'J01FF02', golongan:'Linkosamidd', satuan:'vial', ddd_who:1.8, rute:'Oral', aware:'Watch' },
  { id:276, nama_brand:'ZYvox Tablet 600 mg', nama_generik:'Linezolid', kode_atc:'J01XX08', golongan:'Oksazolidinon', satuan:'vial', ddd_who:1.2, rute:'Oral', aware:'Reserve' },
  { id:277, nama_brand:'ZYvox Infusion 2mg/1mL - 300 mL', nama_generik:'Linezolid', kode_atc:'J01XX08', golongan:'Oksazolidinon', satuan:'vial', ddd_who:1.2, rute:'Parenteral', aware:'Reserve' },
  { id:278, nama_brand:'LanMER Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:279, nama_brand:'MeREM Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:280, nama_brand:'Merobat Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:281, nama_brand:'MeroNEM Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:282, nama_brand:'MeroPENEM Injection 0.5 g (B)', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:283, nama_brand:'MeroNEM Injection 500 mg', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:284, nama_brand:'MeroPENEM Injection 0.5 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:285, nama_brand:'MeroPENEM Injection 1 g (B)', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:286, nama_brand:'MeroPENEM Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:287, nama_brand:'MeROsan Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:288, nama_brand:'MeROsan Injection 500 mg', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:289, nama_brand:'Ronem  Injection 500 mg', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:290, nama_brand:'Ronem Injection 1 g', nama_generik:'Meropenem', kode_atc:'J01DH02', golongan:'Karbapenem', satuan:'vial', ddd_who:3.0, rute:'Parenteral', aware:'Reserve' },
  { id:291, nama_brand:'FlaGYL Forte Tablet 500 mg', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:292, nama_brand:'FlaGYL Suspension 125mg/ 5 mL - 60 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:293, nama_brand:'Trogyl Syrup 125mg/5mL - 60 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:294, nama_brand:'MetroNIDAZOLE Tablet 500 mg', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:295, nama_brand:'MetroNIDAZOLE Tablet 500 mg (B)', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:296, nama_brand:'TriCHOdazol Tablet 500 mg', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:297, nama_brand:'FLAgyl Infusion 500mg/100mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:298, nama_brand:'Metrofusin Infusion 500mg/100 mL - 100 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:299, nama_brand:'MetroNIDAZOLE Infusion 500 mg/100 mL - 100 mL (B)', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:300, nama_brand:'MetroNIDAZOLE Infusion 500 mg/100 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:301, nama_brand:'Nulagyl Infusion 500mg/100 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:302, nama_brand:'TriCHOdazol Infusion 500mg/100mL - 100 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:303, nama_brand:'VelaZOL Infusion 500 mg/100 mL', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:1.5, rute:'Parenteral', aware:'Access' },
  { id:304, nama_brand:'FlaGYL Suppos 1 g', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Rectal', aware:'Access' },
  { id:305, nama_brand:'TriCHOdazol Suppos 1 g', nama_generik:'Metronidazole', kode_atc:'J01XD01', golongan:'Nitroimidazol', satuan:'vial', ddd_who:2.0, rute:'Rectal', aware:'Access' },
  { id:306, nama_brand:'Mycamine Injection 50 mg', nama_generik:'Micafungin', kode_atc:'J02AX05', golongan:'Antijamur Echinocandin', satuan:'vial', ddd_who:0.1, rute:'Parenteral', aware:'Anti-jamur' },
  { id:307, nama_brand:'Micacura Injection 50 mg', nama_generik:'Micafungin', kode_atc:'J02AX05', golongan:'Antijamur Echinocandin', satuan:'vial', ddd_who:0.1, rute:'Parenteral', aware:'Anti-jamur' },
  { id:308, nama_brand:'Mycamine Injection 100 mg', nama_generik:'Micafungin', kode_atc:'J02AX05', golongan:'Antijamur Echinocandin', satuan:'vial', ddd_who:0.1, rute:'Parenteral', aware:'Anti-jamur' },
  { id:309, nama_brand:'Avelox Tablet 400mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:310, nama_brand:'Floxaris Tablet 400 mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:311, nama_brand:'Garena Tablet 400 mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:312, nama_brand:'Moxifloxacin Tablet 400 mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:313, nama_brand:'Respira Tablet 400 mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:314, nama_brand:'Zigat Tablet 400 mg', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:315, nama_brand:'Floxaris Infusion 400mg/250mL - 250 mL', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:316, nama_brand:'Respira Infusion 400mg/250 mL', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:317, nama_brand:'Avelox Infusion 400 mg/250 mL', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:318, nama_brand:'Garena Infusion 400mg/250mL', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:319, nama_brand:'Moxifloxacin Infusion 400mg/250 mL (B)', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:320, nama_brand:'Moxifloxacin Infusion 400mg/250 mL', nama_generik:'Moxifloxacin', kode_atc:'J01MA14', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:321, nama_brand:'Nevirapine Tablet 200 mg', nama_generik:'Nevirapine', kode_atc:'J05AG01', golongan:'Antivirus', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Anti-Virus' },
  { id:322, nama_brand:'Kandistatin Drops 100.000 IU/mL - 12 mL', nama_generik:'Nystatin', kode_atc:'A07AA02', golongan:'Antijamur Polien', satuan:'IU', ddd_who:1.5, rute:'Oral', aware:'Anti-jamur' },
  { id:323, nama_brand:'Nystatin Drops 100.000 IU/mL - 12 mL', nama_generik:'Nystatin', kode_atc:'A07AA02', golongan:'Antijamur Polien', satuan:'IU', ddd_who:1.5, rute:'Oral', aware:'Anti-jamur' },
  { id:324, nama_brand:'Nystin Drops 100.000 IU/mL - 12 mL', nama_generik:'Nystatin', kode_atc:'A07AA02', golongan:'Antijamur Polien', satuan:'IU', ddd_who:1.5, rute:'Oral', aware:'Anti-jamur' },
  { id:325, nama_brand:'OFLOxacin Tablet 200 mg', nama_generik:'Ofloxacin', kode_atc:'J01MA01', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:326, nama_brand:'OFLOxacin Tablet 400 mg', nama_generik:'Ofloxacin', kode_atc:'J01MA01', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:327, nama_brand:'TaRIVid Tablet 200 mg', nama_generik:'Ofloxacin', kode_atc:'J01MA01', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:328, nama_brand:'TaRIVid Tablet 400 mg', nama_generik:'Ofloxacin', kode_atc:'J01MA01', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Watch' },
  { id:329, nama_brand:'Ofloxacin Infusion 2mg/mL-100mL', nama_generik:'Ofloxacin', kode_atc:'J01MA01', golongan:'Fluorokuinolon', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:330, nama_brand:'Tazocin Injection', nama_generik:'Piperacillin-Tazobactam', kode_atc:'J01CR05', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'vial', ddd_who:14.0, rute:'Parenteral', aware:'Watch' },
  { id:331, nama_brand:'Penicillin-G Meiji Injection 3 g', nama_generik:'Procaine Penicillin', kode_atc:'J01CE09', golongan:'Penisilin', satuan:'vial', ddd_who:0, rute:'Parenteral', aware:'Access' },
  { id:332, nama_brand:'Pyrazinamide Tablet 500 mg', nama_generik:'Pyrazinamide', kode_atc:'J04AK01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:333, nama_brand:'Pyrazinamide Tablet 500 mg (B)', nama_generik:'Pyrazinamide', kode_atc:'J04AK01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:334, nama_brand:'SanaZET Tablet 500 mg', nama_generik:'Pyrazinamide', kode_atc:'J04AK01', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:335, nama_brand:'RifamPICIN Tablet 300 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:336, nama_brand:'RifamPICIN Tablet 450 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:337, nama_brand:'RifamPICIN Tablet 600 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:338, nama_brand:'RifamTIBI Caplet 450 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:339, nama_brand:'RifamTIBI Caplet 600 mg (B)', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:340, nama_brand:'RifamTIBI Caplet 600 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:341, nama_brand:'SpiraMYCIN Tablet 500 mg', nama_generik:'Spiramycin', kode_atc:'J01FA02', golongan:'Makrolid', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Watch' },
  { id:342, nama_brand:'Spiranter Tablet 500 mg', nama_generik:'Spiramycin', kode_atc:'J01FA02', golongan:'Makrolid', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Watch' },
  { id:343, nama_brand:'SpiraCIN Tablet 500 mg', nama_generik:'Spiramycin', kode_atc:'J01FA02', golongan:'Makrolid', satuan:'vial', ddd_who:3.0, rute:'Oral', aware:'Watch' },
  { id:344, nama_brand:'Streptomycin Meiji Injection 1 g', nama_generik:'Streptomycin', kode_atc:'J01GA01', golongan:'Aminoglikosida', satuan:'vial', ddd_who:1.0, rute:'Parenteral', aware:'Watch' },
  { id:345, nama_brand:'Cotrimoxazol Tablet 480 mg', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:346, nama_brand:'Cotrimoxazol Tablet 480 mg (B)', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:347, nama_brand:'Cotrimoxazol Forte Tablet 960 mg (B)', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:348, nama_brand:'Cotrimoxazol Forte Tablet 960 mg', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:349, nama_brand:'Cotrimoxazol Tablet 480 mg', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:350, nama_brand:'SanPRIMA Forte Tablet', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:351, nama_brand:'Cotrimoxazol Suspensi 240 mg/5 mL - 60 mL (B)', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:352, nama_brand:'SanPRIMA Syrup 240 mg/5 mL - 60 mL', nama_generik:'Sulfamethoxazole-Trimethoprim', kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Access' },
  { id:353, nama_brand:'InterBI Tablet 250 mg', nama_generik:'Terbinafine', kode_atc:'B01BA02', golongan:'Antijamur', satuan:'vial', ddd_who:2.0, rute:'Oral', aware:'Anti-jamur' },
  { id:354, nama_brand:'Vellanin Injection 400 mg', nama_generik:'Teicoplanin', kode_atc:'J01XA02', golongan:'Glikopeptida', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Watch' },
  { id:355, nama_brand:'Biothicol Capsule 500 mg', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:356, nama_brand:'BIOthicol Dry Syrup 125mg/5mL - 60 mL', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:357, nama_brand:'BIOthicol Forte Dry Syrup 250mg/5mL - 60 mL', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:358, nama_brand:'GENIcol Capsule 500 mg', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:359, nama_brand:'ThiamPHENicol Capsule 500 mg', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:360, nama_brand:'ThiaMYCIN Capsule 500 mg', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:361, nama_brand:'ThiaMYCIN Syrup 125 mg/5 mL - 60 mL', nama_generik:'Thiamphenicol', kode_atc:'J01BA02', golongan:'Amfenikol', satuan:'vial', ddd_who:1.5, rute:'Oral', aware:'Access' },
  { id:362, nama_brand:'Tygacil Injection 50 mg', nama_generik:'Tigecycline', kode_atc:'J01AA12', golongan:'Tetrasiklin (Glisilsiklin)', satuan:'vial', ddd_who:0.1, rute:'Parenteral', aware:'Reserve' },
  { id:363, nama_brand:'VanCEP Injection 500 mg', nama_generik:'Vancomycin', kode_atc:'J01XA01', golongan:'Glikopeptida', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Reserve' },
  { id:364, nama_brand:'Vancomycin HCl Injection 500 mg (B)', nama_generik:'Vancomycin', kode_atc:'J01XA01', golongan:'Glikopeptida', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Reserve' },
  { id:365, nama_brand:'VanCOMycin HCl Injection 500 mg', nama_generik:'Vancomycin', kode_atc:'J01XA01', golongan:'Glikopeptida', satuan:'vial', ddd_who:2.0, rute:'Parenteral', aware:'Reserve' },
  { id:366, nama_brand:'VFEND Tablet 200 mg', nama_generik:'Voriconazole', kode_atc:'J02AC03', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.4, rute:'Oral', aware:'Anti-jamur' },
  { id:367, nama_brand:'VFEND Infusion 200 mg', nama_generik:'Voriconazole', kode_atc:'J02AC03', golongan:'Antijamur Triazol', satuan:'vial', ddd_who:0.4, rute:'Parenteral', aware:'Anti-jamur' },
  { id:368, nama_brand:'Pro TB 4 Tablet R-150; E-275 mg; I-75 mg; P-400 mg', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:369, nama_brand:'FDC Kategori 1 - Fase Awal', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:370, nama_brand:'FDC Kategori 1 - Fase Lanjutan', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:371, nama_brand:'OAT Anak-KDT Fase Internal', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
  { id:372, nama_brand:'OAT Anak-KDT Fase Lanjutan', nama_generik:'Rifampicin', kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis', satuan:'vial', ddd_who:0.6, rute:'Oral', aware:'Anti-Tuberkulosis' },
];

// KONFIGURASI STORAGE
const STORAGE_KEYS = {
  auth: 'smartddd_auth_session',
  antibiotics: 'smartddd_antibiotics_data',
  history: 'smartddd_history_v2',
  users: 'smartddd_users_v2'
};

const STAFF_GROUPS = {
  ranap: ['Bedah', 'Penyakit Dalam', 'Kandungan', 'Intensive', 'Lain-lain'],
  rajal: ['Bedah', 'Penyakit Dalam', 'Kandungan', 'All']
};

let antibiotics = [];
let history = [];
let users = [];
let currentUser = null;
let currentCalcType = 'ranap';
let barChart = null, pieChart = null, dashPieChart = null;

// ==========================================
// 1. FUNGSI INISIALISASI & AUTH
// ==========================================
function loadAllData() {
  const storedAtb = localStorage.getItem(STORAGE_KEYS.antibiotics);
  antibiotics = storedAtb ? JSON.parse(storedAtb) : INITIAL_ANTIBIOTICS;
  if (!storedAtb) localStorage.setItem(STORAGE_KEYS.antibiotics, JSON.stringify(antibiotics));

  const storedHist = localStorage.getItem(STORAGE_KEYS.history);
  history = storedHist ? JSON.parse(storedHist) : [];

  const storedUsers = localStorage.getItem(STORAGE_KEYS.users);
  users = storedUsers ? JSON.parse(storedUsers) : [
    { id: 1, fullname: 'Administrator', username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, fullname: 'Fadillah Fazrin', username: 'FadillahF', password: '123', role: 'user' }
  ];
  if (!storedUsers) localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));

  const session = localStorage.getItem(STORAGE_KEYS.auth);
  if (session) {
    currentUser = JSON.parse(session);
    showApp();
  }
}

function login() {
  const u = document.getElementById('loginUsername').value;
  const p = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');

  const user = users.find(x => x.username === u && x.password === p);
  if (user) {
    currentUser = user;
    localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(user));
    errorEl.classList.add('hidden');
    showApp();
    showToast(`Selamat datang, ${user.fullname}!`);
  } else {
    errorEl.classList.remove('hidden');
  }
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.auth);
  location.reload();
}

function showApp() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  
  const avatar = currentUser.fullname[0].toUpperCase();
  document.getElementById('sidebarAvatar').textContent = avatar;
  document.getElementById('navAvatar').textContent = avatar;
  document.getElementById('sidebarUserName').textContent = currentUser.fullname;
  document.getElementById('navUserName').textContent = currentUser.fullname;

  // Sembunyikan/Tampilkan Menu Admin berdasarkan role
  const adminMenu = document.getElementById('adminMenu');
  if (currentUser.role === 'admin') {
    adminMenu.classList.remove('hidden');
  } else {
    adminMenu.classList.add('hidden');
  }

  refreshAllViews();
  navigate('dashboard');
}

// ==========================================
// 2. FUNGSI NAVIGASI & KONEKSI MENU
// ==========================================
function navigate(sec) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
  document.getElementById(sec + 'Section').classList.add('active-section');
  document.getElementById('pageTitle').textContent = sec.toUpperCase();

  // Sidebar active state
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === sec);
  });

  // Mobile menu close
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('mobile-open');
    document.getElementById('sidebarOverlay').classList.remove('active');
  }

  // Panggil fungsi render spesifik tiap menu
  if (sec === 'dashboard') initDashboard();
  if (sec === 'masterdata') renderMasterTable();
  if (sec === 'kalkulator') { populateAntibioticSelect(); renderHistory(); }
  if (sec === 'statistik') initStatistik();
  if (sec === 'export') initExport();
  if (sec === 'usermanagement') renderUserTable();
}

function refreshAllViews() {
  initDashboard();
  initStatistik();
  initExport();
  renderHistory();
}

// ==========================================
// 3. MANAJEMEN USER (ADMIN ONLY)
// ==========================================
function renderUserTable() {
  const tbody = document.querySelector('#usermanagementSection tbody');
  if (!tbody) return;

  tbody.innerHTML = users.map(u => `
    <tr>
      <td><strong>${u.fullname}</strong></td>
      <td>${u.username}</td>
      <td><span class="badge ${u.role === 'admin' ? 'badge-reserve' : 'badge-access'}">${u.role.toUpperCase()}</span></td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn-icon btn-icon-edit" onclick="openUserModal('edit', ${u.id})">✎</button>
          ${u.username !== 'admin' ? `<button class="btn-icon btn-icon-del" onclick="deleteUser(${u.id})">×</button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function openUserModal(mode, id) {
  document.getElementById('userModalOverlay').classList.remove('hidden');
  const title = document.getElementById('userModalTitle');
  const editIdField = document.getElementById('userEditId');

  if (mode === 'add') {
    title.textContent = 'Tambah User Baru';
    editIdField.value = '';
    document.getElementById('uFullname').value = '';
    document.getElementById('uUsername').value = '';
    document.getElementById('uPassword').value = '';
  } else {
    const u = users.find(x => x.id === id);
    title.textContent = 'Edit User';
    editIdField.value = u.id;
    document.getElementById('uFullname').value = u.fullname;
    document.getElementById('uUsername').value = u.username;
    document.getElementById('uPassword').value = u.password;
    document.getElementById('uRole').value = u.role;
  }
}

function closeUserModal() { document.getElementById('userModalOverlay').classList.add('hidden'); }

function saveUser() {
  const id = document.getElementById('userEditId').value;
  const data = {
    fullname: document.getElementById('uFullname').value,
    username: document.getElementById('uUsername').value,
    password: document.getElementById('uPassword').value,
    role: document.getElementById('uRole').value
  };

  if(!data.fullname || !data.username || !data.password) return showToast('Semua data user wajib diisi!', 'error');

  if (id) {
    const idx = users.findIndex(x => x.id == id);
    users[idx] = { ...users[idx], ...data };
  } else {
    const newId = users.length > 0 ? Math.max(...users.map(x => x.id)) + 1 : 1;
    users.push({ id: newId, ...data });
  }

  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
  closeUserModal();
  renderUserTable();
  showToast('User berhasil disimpan');
}

function deleteUser(id) {
  if (confirm('Hapus user ini?')) {
    users = users.filter(x => x.id !== id);
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
    renderUserTable();
  }
}

// ==========================================
// 4. FITUR IMPOR EXCEL & AGREGASI
// ==========================================
function handleExcelImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      if (rows.length === 0) return showToast('File Excel kosong!', 'error');

      const factorInput = prompt(currentCalcType === 'ranap' ? "Masukkan Total LOS (Hari):" : "Masukkan Total Kunjungan:", "1");
      const factor = parseInt(factorInput);
      if (isNaN(factor) || factor <= 0) return showToast('Batal: Angka tidak valid.', 'error');

      const aggregatedData = {};
      rows.forEach(row => {
        const brandName = (row.ItemDesc || row.Brand || row.Antibiotik || "").toString().trim();
        const qty = parseFloat(row.QtyBilling || row.Penggunaan || row.Qty || 0);
        if (brandName && qty > 0) { aggregatedData[brandName] = (aggregatedData[brandName] || 0) + qty; }
      });

      let importCount = 0;
      Object.keys(aggregatedData).forEach(brandName => {
        const atb = antibiotics.find(a => a.nama_brand.toLowerCase() === brandName.toLowerCase());
        if (atb) {
          const usage = aggregatedData[brandName];
          const totalDDD = usage / atb.ddd_who;
          const hasil = (currentCalcType === 'ranap') ? (totalDDD / factor) * 100 : (totalDDD / factor) * 1000;

          history.push({
            id: Date.now() + Math.random(),
            nama_brand: atb.nama_brand,
            nama_generik: atb.nama_generik,
            tipe: currentCalcType,
            staff: "Imported Excel",
            total_gram: usage,
            total_ddd: totalDDD,
            hasil_akhir: hasil,
            tanggal: new Date().toISOString()
          });
          importCount++;
        }
      });

      if (importCount > 0) {
        saveHistoryToStorage();
        refreshAllViews();
        showToast(`Impor Berhasil: ${importCount} data masuk!`);
      } else { showToast('Gagal: Produk tidak cocok dengan Master Data.', 'error'); }
    } catch (err) { showToast('Kesalahan baca file.', 'error'); }
  };
  reader.readAsArrayBuffer(file);
  event.target.value = ''; 
}

// ==========================================
// 5. KALKULATOR & FORMULA DDD (LOS / Kunjungan)
// ==========================================
function calculateDDD() {
  const id = document.getElementById('calcAntibiotic').value;
  const totalG = parseFloat(document.getElementById('calcTotalGram').value);
  if (!id || isNaN(totalG)) return showToast('Lengkapi data!', 'error');

  const a = antibiotics.find(x => x.id == id);
  const totalDDD = totalG / a.ddd_who;
  let finalResult = 0;
  let formulaStr = "";

  if (currentCalcType === 'ranap') {
    const hari = parseInt(document.getElementById('calcLamaRawat').value);
    if (isNaN(hari)) return showToast('Isi Lama Rawat!', 'error');
    finalResult = (totalDDD / hari) * 100;
    formulaStr = `(${totalDDD.toFixed(4)} / ${hari}) x 100 = ${finalResult.toFixed(3)}`;
  } else {
    const kunj = parseInt(document.getElementById('calcTotalKunjungan').value);
    if (isNaN(kunj)) return showToast('Isi Total Kunjungan!', 'error');
    finalResult = (totalDDD / kunj) * 1000;
    formulaStr = `(${totalDDD.toFixed(4)} / ${kunj}) x 1000 = ${finalResult.toFixed(3)}`;
  }

  history.push({
    id: Date.now(), nama_brand: a.nama_brand, nama_generik: a.nama_generik,
    tipe: currentCalcType, staff: document.getElementById('calcStaff').value,
    total_gram: totalG, total_ddd: totalDDD, hasil_akhir: finalResult,
    tanggal: new Date().toISOString()
  });

  saveHistoryToStorage();
  refreshAllViews();
  
  document.getElementById('calcResultCard').classList.remove('hidden');
  document.getElementById('resultAntibiotic').textContent = a.nama_brand;
  document.getElementById('resultTotalDDD').textContent = totalDDD.toFixed(4);
  document.getElementById('resultLabelKey').textContent = currentCalcType === 'ranap' ? 'DDD / 100 LOS' : 'DDD / 1000 Kunjungan';
  document.getElementById('resultValueKey').textContent = finalResult.toFixed(3);
  document.getElementById('resultFormula').textContent = formulaStr;
  
  showToast('Perhitungan disimpan');
}

// ==========================================
// 6. DASHBOARD & STATISTIK & EXPORT
// ==========================================
function initDashboard() {
  const elAtb = document.getElementById('statTotalAntibiotik');
  const elCalc = document.getElementById('statTotalKalkulasi');
  if (elAtb) elAtb.textContent = antibiotics.length;
  if (elCalc) elCalc.textContent = history.length;
}

function initStatistik() {
  const ctxBar = document.getElementById('barChart');
  if (!ctxBar || history.length === 0) return;
  const dataMap = {};
  history.forEach(h => { dataMap[h.nama_generik] = (dataMap[h.nama_generik] || 0) + h.total_ddd; });
  const sorted = Object.entries(dataMap).sort((a,b) => b[1] - a[1]).slice(0, 10);
  if (barChart) barChart.destroy();
  barChart = new Chart(ctxBar, {
    type: 'bar',
    data: { labels: sorted.map(x => x[0]), datasets: [{ label: 'Total DDD', data: sorted.map(x => x[1]), backgroundColor: '#1565C0' }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function initExport() {
  const ranapBody = document.getElementById('printHistoryRanapBody');
  const rajalBody = document.getElementById('printHistoryRajalBody');
  if (!ranapBody || !rajalBody) return;

  const renderRow = (h, i) => `
    <tr>
      <td>${i+1}</td>
      <td>${h.nama_brand}</td>
      <td>${h.staff}</td>
      <td class="mono">${h.total_ddd.toFixed(4)}</td>
      <td class="mono"><strong>${h.hasil_akhir.toFixed(3)}</strong></td>
      <td><small>${formatDateShort(h.tanggal)}</small></td>
    </tr>
  `;

  ranapBody.innerHTML = history.filter(h=>h.tipe==='ranap').map(renderRow).join('') || '<tr><td colspan="6">Data Kosong</td></tr>';
  rajalBody.innerHTML = history.filter(h=>h.tipe==='rajal').map(renderRow).join('') || '<tr><td colspan="6">Data Kosong</td></tr>';
}

function exportToExcel() {
  const data = history.map(h => ({
    Tanggal: formatDateShort(h.tanggal),
    Tipe: h.tipe.toUpperCase(),
    Brand: h.nama_brand,
    Generik: h.nama_generik,
    Total_vial: h.total_gram,
    Total_DDD: h.total_ddd.toFixed(4),
    Hasil_Akhir: h.hasil_akhir.toFixed(3)
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Laporan");
  XLSX.writeFile(wb, "Laporan_SmartDDD.xlsx");
}

// ==========================================
// 7. UTILS & UI
// ==========================================
function saveHistoryToStorage() { localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history)); }

function toggleSidebar() {
  const s = document.getElementById('sidebar');
  if (window.innerWidth > 768) s.classList.toggle('collapsed');
  else { s.classList.toggle('mobile-open'); document.getElementById('sidebarOverlay').classList.toggle('active'); }
}

function populateAntibioticSelect() {
  const sel = document.getElementById('calcAntibiotic');
  if (!sel) return;
  const sorted = [...antibiotics].sort((a,b) => a.nama_brand.localeCompare(b.nama_brand));
  sel.innerHTML = '<option value="">-- Pilih Brand/Produk --</option>' + sorted.map(a => `<option value="${a.id}">${a.nama_brand}</option>`).join('');
}

function onAntibioticSelect() {
  const id = document.getElementById('calcAntibiotic').value;
  if (!id) return;
  const a = antibiotics.find(x => x.id == id);
  document.getElementById('calcNamaGenerik').value = a.nama_generik;
  document.getElementById('calcRute').value = a.rute;
  document.getElementById('infoKodeAtc').textContent = a.kode_atc;
  document.getElementById('infoDddWho').textContent = `${a.ddd_who} ${a.satuan}`;
  document.getElementById('dddInfoRow').style.display = 'grid';
}

function switchCalcType(t) {
  currentCalcType = t;
  document.getElementById('btnTypeRanap').classList.toggle('active', t === 'ranap');
  document.getElementById('btnTypeRajal').classList.toggle('active', t === 'rajal');
  document.getElementById('fieldsRanap').classList.toggle('hidden', t === 'rajal');
  document.getElementById('fieldsRajal').classList.toggle('hidden', t === 'ranap');
  const staffSel = document.getElementById('calcStaff');
  staffSel.innerHTML = STAFF_GROUPS[t].map(s => `<option value="${s}">${s}</option>`).join('');
}

function renderHistory() {
  const tbody = document.getElementById('historyTableBody');
  if (!tbody) return;
  tbody.innerHTML = [...history].reverse().slice(0, 10).map(h => `
    <tr>
      <td><small>${h.nama_brand}</small></td>
      <td><small>${h.tipe}</small></td>
      <td class="mono"><strong>${h.hasil_akhir.toFixed(3)}</strong></td>
      <td><button class="btn-danger-sm" onclick="deleteHistory(${h.id})">×</button></td>
    </tr>
  `).join('') || '<tr><td colspan="4">Belum ada data</td></tr>';
}

function renderMasterTable() {
  const tbody = document.getElementById('masterTableBody');
  if(!tbody) return;
  tbody.innerHTML = antibiotics.slice(0, 50).map((a, i) => `
    <tr>
      <td>${i+1}</td>
      <td><strong>${a.nama_generik}</strong></td>
      <td><small>${a.nama_brand}</small></td>
      <td class="mono">${a.kode_atc}</td>
      <td>${a.rute}</td>
      <td>${a.ddd_who}</td>
      <td><span class="badge badge-${a.aware.toLowerCase().replace(' ','-')}">${a.aware}</span></td>
      <td>...</td>
    </tr>
  `).join('');
}

function deleteHistory(id) {
  history = history.filter(x => x.id !== id);
  saveHistoryToStorage();
  refreshAllViews();
}

function clearHistory() { if (confirm('Hapus semua riwayat?')) { history = []; saveHistoryToStorage(); refreshAllViews(); } }

function showToast(m, t = 'success') {
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = m;
  el.style.background = t === 'error' ? '#DC2626' : '#1A2332';
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3000);
}

function formatDateShort(iso) { return new Date(iso).toLocaleDateString('id-ID'); }
function togglePasswordVisibility() {
  const p = document.getElementById('loginPassword');
  p.type = p.type === 'password' ? 'text' : 'password';
}

window.addEventListener('DOMContentLoaded', loadAllData);
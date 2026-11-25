import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base: process.env.BASE_PATH || '/', plugins:[react(),VitePWA({registerType:'prompt',includeAssets:['icon.svg','apple-touch-icon.png'],manifest:{name:'Rondo — Football Teammates',short_name:'Rondo',description:'A football teammate guessing game for your Game Master.',theme_color:'#101714',background_color:'#101714',display:'standalone',start_url:'./',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,ico,png,svg,json}']}})]});

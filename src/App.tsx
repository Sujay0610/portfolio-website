import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Calendar,
  ChevronUp,
  User,
  Briefcase,
  FolderOpen,
  Phone,
  Database,
  Server,
  Code,
  Zap,
  Bot,
  Search,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Settings,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';

// Skill Icons Component
const SkillIcon = ({ name }: { name: string }) => {
  const getIcon = () => {
    switch (name) {
      case 'TypeScript':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>
        );
      case 'Java':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#ED8B00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
          </svg>
        );
      case 'Docker':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.938-.089 2.844-.266a11.94 11.94 0 003.766-1.456c1.127-.665 2.07-1.57 2.8-2.69a12.511 12.511 0 001.57-2.809.4.4 0 00.014-.02h.017c1.117 0 2.164-.4 2.784-1.339l.169-.263-.226-.2"/>
          </svg>
        );
      case 'React':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.015-1.36.034a14.88 14.88 0 0 1 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034a14.716 14.716 0 0 1-1.36 1.544c-.455-.467-.91-.991-1.36-1.544z"/>
          </svg>
        );
      case 'Node.js':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
          </svg>
        );
      case 'Python':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#3776AB" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
          </svg>
        );
      case 'AWS':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112a2.417 2.417 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.588-.894-.588-1.533 0-.678.239-1.226.717-1.642.479-.415 1.114-.623 1.906-.623.263 0 .535.024.815.064.287.048.583.112.888.2v-.656c0-.694-.144-1.18-.423-1.463-.287-.282-.774-.423-1.469-.423-.315 0-.639.04-.967.112-.328.08-.647.183-.95.32-.144.063-.248.104-.32.127-.071.024-.127.032-.168.032-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28.04-.064.112-.128.207-.2.32-.167.704-.304 1.157-.415.447-.104.926-.16 1.437-.16 1.117 0 1.923.255 2.427.758.5.503.75 1.294.75 2.373l-.007.055zm-3.235 1.214c.255 0 .519-.048.791-.135.271-.096.51-.271.718-.51.127-.152.216-.32.271-.51.056-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.718-.16 5.942 5.942 0 00-.775-.056c-.543 0-.95.104-1.229.32-.287.215-.423.518-.423.917 0 .375.095.655.287.846.191.2.47.296.838.296l.16.021zm6.415.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.145.312l1.677 6.605 1.558-6.605c.024-.16.072-.264.128-.312.064-.056.175-.08.327-.08h.639c.152 0 .263.025.327.08.064.048.113.16.128.312l1.574 6.685 1.726-6.685c.032-.16.08-.264.144-.312.064-.056.168-.08.312-.08h.742c.128 0 .2.065.2.2 0 .04-.009.08-.017.128-.008.048-.024.112-.056.2l-2.407 7.736c-.048.16-.104.263-.168.311-.064.056-.168.08-.312.08h-.687c-.152 0-.264-.024-.328-.08-.064-.048-.112-.16-.128-.32L13.355 7.7l-1.542 6.04c-.016.16-.064.272-.128.32-.064.056-.176.08-.328.08h-.687v-.008zm10.663.184c-.44 0-.878-.048-1.309-.152-.431-.096-.766-.2-.997-.32-.144-.071-.24-.151-.279-.223-.04-.072-.064-.151-.064-.24v-.407c0-.167.064-.248.184-.248.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.886.279.32.072.63.104.95.104.502 0 .894-.088 1.165-.264.279-.176.415-.423.415-.734 0-.216-.08-.399-.24-.559-.159-.151-.454-.287-.886-.415l-1.277-.4c-.646-.2-1.117-.495-1.405-.886-.287-.383-.431-.822-.431-1.325 0-.383.08-.718.24-1.006.159-.287.375-.527.646-.718.271-.2.583-.343.942-.447.36-.096.734-.152 1.117-.152.191 0 .391.016.583.04.2.024.375.064.559.104.175.048.34.096.495.16.151.063.279.127.375.2.096.071.168.151.207.231.04.08.064.175.064.279v.375c0 .168-.064.256-.184.256-.064 0-.167-.032-.295-.096-.447-.2-.95-.296-1.501-.296-.455 0-.815.072-1.06.216-.248.144-.375.359-.375.647 0 .216.087.4.255.559.168.16.479.304.926.44l1.237.391c.638.2 1.093.479 1.373.838.287.36.423.775.423 1.254 0 .399-.08.758-.231 1.069-.16.32-.375.583-.655.798-.271.215-.6.375-.973.487-.384.112-.8.168-1.229.168l-.024.016z"/>
          </svg>
        );
      case 'PostgreSQL':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#336791" d="M23.111 5.441c-.777-1.185-2.223-1.185-2.223-1.185s-1.446 0-2.223 1.185c-.777 1.185-.777 3.111-.777 3.111v7.407c0 1.926.777 3.111.777 3.111s1.446 1.185 2.223 1.185 2.223-1.185 2.223-1.185.777-1.185.777-3.111V8.552s0-1.926-.777-3.111zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
        );
      case 'MongoDB':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
          </svg>
        );
      case 'Git':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
        );
      case 'Kubernetes':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#326CE5" d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 002.075-2.597l-1.082.174zm.57-2.112l1.274-1.274a5.19 5.19 0 00-2.717-1.274l1.443 2.548zm1.49-2.94l.01.007 2.413-.999a5.171 5.171 0 00-2.597-2.075l.174 1.082zm2.112-.57l1.274 1.274a5.19 5.19 0 001.274-2.717l-2.548 1.443zm2.94 1.49l-.007.01.999 2.413a5.171 5.171 0 002.075-2.597l-1.082.174zm-.57 2.112l-1.274 1.274a5.19 5.19 0 002.717 1.274l-1.443-2.548zm-1.49 2.94l-.01-.007-2.413.999a5.171 5.171 0 002.597 2.075l-.174-1.082zm-2.112.57l-1.274-1.274a5.19 5.19 0 00-1.274 2.717l2.548-1.443zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
          </svg>
        );
      case 'FastAPI':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#009688" d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.627 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.185L11.376 21.62z"/>
          </svg>
        );

      case 'Supabase':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#3ECF8E" d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 00.836 1.659H12V23.604a.396.396 0 00.716.233L21.797 11.576l.401-.562a1.04 1.04 0 00-.836-1.66z"/>
          </svg>
        );
      case 'Streamlit':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#FF4B4B" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.5 17.5v-11L18 12l-7.5 5.5z"/>
          </svg>
        );
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return getIcon();
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add cursor trail effect
      setCursorTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 trail points
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'TypeScript', color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.1)' },
    { name: 'Java', color: '#ED8B00', bgColor: 'rgba(237, 139, 0, 0.1)' },
    { name: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
    { name: 'Node.js', color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)' },
    { name: 'Python', color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.1)' },
    { name: 'Docker', color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.1)' },
    { name: 'AWS', color: '#FF9900', bgColor: 'rgba(255, 153, 0, 0.1)' },
    { name: 'PostgreSQL', color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)' },
    { name: 'MongoDB', color: '#47A248', bgColor: 'rgba(71, 162, 72, 0.1)' },
    { name: 'Git', color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.1)' },
    { name: 'Kubernetes', color: '#326CE5', bgColor: 'rgba(50, 108, 229, 0.1)' },
    { name: 'FastAPI', color: '#009688', bgColor: 'rgba(0, 150, 136, 0.1)' },


    { name: 'Supabase', color: '#3ECF8E', bgColor: 'rgba(62, 207, 142, 0.1)' },
    { name: 'Streamlit', color: '#FF4B4B', bgColor: 'rgba(255, 75, 75, 0.1)' }
  ];

  const projects = [
    {
      title: 'LeadGen SaaS Platform',
      description: 'AI-powered lead generation tool with ICP scoring, campaign analytics, and email automation.',
      details: [
        'Built FastAPI backend with Resend integration',
        'Streamlit-based dashboard for outreach monitoring',
        'Zapier/n8n integrations for automation triggers'
      ],
      tags: ['LeadGen', 'AI', 'Supabase', 'Cold Email'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Real-Time Intrusion Detection AI Agent',
      description: 'Low-latency IDS built with Suricata & DPDK for live network monitoring and ML classification.',
      details: [
        'Real-time feature extraction in packet capture',
        'Custom ML models for intrusion detection',
        'Research paper in progress on performance and detection pipeline'
      ],
      tags: ['Suricata', 'DPDK', 'Machine Learning', 'Cybersecurity'],
      links: { github: '#' }
    },
    {
      title: 'Agentic RAG Chatbot for Manufacturing Automation',
      description: 'Multi-agent enterprise chatbot informed by manuals and ERP using LangChain, Qdrant, and CrewAI.',
      details: [
        'Tool chaining, multimodal semantic retrieval, reduced hallucinations',
        'ERP integrations for inventory and scheduling tasks',
        'Responsive UI for document upload and chat'
      ],
      tags: ['RAG', 'ERP', 'LangChain', 'CrewAI', 'Vector DB'],
      links: { demo: '#' }
    },
    {
      title: 'GiftFulfill API Platform',
      description: 'API-first gift fulfillment backend with SMS verification, SDKs, and automation workflows.',
      details: [
        'OpenAPI-generated SDKs and REST endpoints',
        'Excel upload batch ability, webhook support',
        'Zapier & n8n integration with service automation'
      ],
      tags: ['FastAPI', 'API', 'Automation', 'SDKs', 'Zapier'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Hotel Recommendation Chatbot (RAG‑Enabled)',
      description: 'Streamlit-based chatbot using OpenRouter for hotel recommendations.',
      details: [
        'Handles booking flow, summarization, and guest questions',
        'RAG pipeline retrieves contextually relevant info from hotel data'
      ],
      tags: ['RAG', 'Streamlit', 'NLP', 'OpenRouter'],
      links: { demo: '#' }
    }
  ];

  const experiences = [
    {
      company: 'Starlly Solutions Pvt Ltd',
      role: 'AI and Automation Engineer Intern',
      period: 'Jul 2024 – Aug 2024',
      description: 'Built RAG-based chat assistants and internal tools with ERP integration.',
      link: 'https://www.linkedin.com/company/starlly-solutions-pvt.-ltd.'
    },
    {
      company: 'AIgentsify', 
      role: 'Founder',
      period: 'Jan 2025 – Present',
      description: 'Built AI-powered automation tooling and SaaS products for hotels and BnB owners.',
      link: 'https://aigentsify.com/'
    },
    {
      company: 'Center for Information Security, Forensics and Cyber Resilience',
      role: 'Research Trainee',
      period: 'June 2025 – July 2025',
      description: 'Research in cybersecurity, digital forensics, and cyber resilience technologies.'
    },
    {
      company: 'Center for Research in AI for Progressive Interdisciplinary Development',
      role: 'AI/ML Research Intern',
      period: 'May 2024 – June 2024',
      description: 'Research in AI/ML applications for interdisciplinary development and innovation.'
    },
    {
      company: 'Freelance', 
      role: 'AI & Automation Developer',
      period: 'Aug 2023 – May 2024',
      description: 'Delivered scalable lead-gen, API-driven solutions for startups and B2B clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-x-hidden">
      {/* Simplified Background */}
      <div className="fixed inset-0 z-0">
        {/* Enhanced mouse follower gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl transition-all duration-200 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Cursor trail */}
        {cursorTrail.map((point, index) => (
          <div
            key={point.id}
            className="absolute bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-sm pointer-events-none"
            style={{
              left: point.x - (4 - index * 0.5),
              top: point.y - (4 - index * 0.5),
              width: `${8 - index}px`,
              height: `${8 - index}px`,
              opacity: (8 - index) / 8,
              transform: 'translate3d(0, 0, 0)',
              transition: 'all 0.3s ease-out'
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5"></div>
        <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Sujay S Chakravarthy</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'contact', label: 'Contact', icon: Phone }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === id 
                      ? 'text-white bg-gray-800' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 relative z-10" ref={heroRef}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-8 text-white animate-fade-in-up">
              about
            </h2>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              tldr; CS student @ PESU | founder of <a href="https://aigentsify.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline hover:glow transition-all duration-300">AIgentsify</a> — an AI automation agency
            </p>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              i build AI agents and automation workflows, agentic RAG bots. i'm passionate about creating AI products that deliver real-world value
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              fascinated by space, science, and ideas that expand the mind.
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.8s' }}>socials</h3>
            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/sujaysc06', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/Sujay0610', label: 'GitHub' },
              { icon: Twitter, href: 'https://twitter.com/sujaysc06', label: 'Twitter' },
              { icon: Mail, href: 'mailto:sujay0610@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '1.2s' }}>skills</h3>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center justify-center w-16 h-16 rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 hover:scale-110 hover:border-gray-600 cursor-pointer overflow-hidden"
                  style={{
                    '--skill-color': skill.color,
                    '--skill-bg': skill.bgColor
                  } as React.CSSProperties}
                >
                  {/* Bloom effect background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Icon container */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    <SkillIcon name={skill.name} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-20 pointer-events-none">
                    {skill.name}
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}60`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold mb-8 text-white">experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <a
                key={exp.company}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 glass"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 group-hover:text-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                    <Briefcase size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors">{exp.company}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{exp.role}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{exp.period}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Personal Projects</h2>
          <p className="text-gray-400 mb-8">Here are few of my recent projects.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-500 border border-gray-800 hover:border-gray-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10 glass relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <h3 className="text-white font-medium mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <ul className="text-gray-500 text-sm mb-4 space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">• {detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black text-gray-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center space-x-1 text-white hover:text-teal-300 text-sm transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 text-sm transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-white animate-fade-in-up">
            Want to build something with AI? Let's connect.
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm always interested in discussing AI projects, automation opportunities, or potential collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#"
              className="group flex items-center space-x-3 bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar size={20} className="relative z-10" />
              <span className="relative z-10">Book a Call</span>
            </a>
            <a
              href="mailto:sujay0610@gmail.com"
              className="group flex items-center space-x-3 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 text-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-gray-800 hover:border-gray-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 glass relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10">sujay0610@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-gray-800 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
            © 2025 Sujay S Chakravarthy
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white hover:bg-gray-200 text-black p-3 rounded-full shadow-lg transition-all z-50 hover:scale-110 hover:shadow-xl hover:shadow-white/20 animate-float"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}

export default App;
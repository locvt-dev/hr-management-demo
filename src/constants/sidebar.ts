import {
  CardsThreeIcon,
  CheckedIcon,
  CalendarIcon,
  BaloIcon,
  CompassIcon,
} from '@/components/icons';

export const SIDEBAR = [
  {
    name: 'Sơ đồ cơ cấu tổ chức',
    destination: '/so-do-co-cau-to-chuc',
    icon: CardsThreeIcon,
  },
  {
    name: 'Danh sách hợp đồng',
    destination: '/danh-sach-hop-dong',
    icon: CheckedIcon,
  },
  {
    name: 'Danh sách JD',
    destination: '/danh-sach-jd',
    icon: CalendarIcon,
  },

  {
    name: 'Danh sách nhân viên',
    destination: '/danh-sach-nhan-vien',
    icon: BaloIcon,
  },

  {
    name: 'Thống kê hiệu suất',
    destination: '/thong-ke-hieu-suat',
    icon: CompassIcon,
  },
];

# Hệ Thống Quản Lý Nhân Sự (HR Management System)

Dự án xây dựng hệ thống quản lý nhân sự trên nền tảng đám mây, sử dụng MERN Stack (MongoDB, Express, React, Node.js) và được đóng gói, triển khai tự động bằng Docker, Render.

**Thông tin sinh viên:**
- **Họ và tên:** Hồ Trường Thịnh
- **MSSV:** 237729
- **Docker Hub:** hotruongthinh237729

**Danh sách đường link nộp bài (Mục IV):**
1. **Link_GitHub:** https://github.com/237729TruongThinh/237729_HoTruongThinh
2. **Link_Docker_Backend:** https://hub.docker.com/r/hotruongthinh237729/backend
3. **Link_Docker_Frontend:** https://hub.docker.com/r/hotruongthinh237729/frontend
4. **Link_Render_App:** [Cập nhật link Render Frontend sau khi làm xong Câu 7]
5. **Link_Render_API:** [Cập nhật link Render Backend sau khi làm xong Câu 8]
6. **Link_Data_MongoDB:** ONGO_URI=mongodb+srv://nhattruong2025678_db_user:jUSTLAIX0pdjkOpY@cluster-237729.bsgksvf.mongodb.net/237729_HoTruongThinh?retryWrites=true&w=majority


**Cấu trúc dự án:**
- `/backend`: Mã nguồn Node.js/Express API.
- `/frontend`: Mã nguồn giao diện ReactJS.

**Hướng dẫn chạy cục bộ với Docker:**
```bash
# Kéo image từ Docker Hub
docker pull hotruongthinh237729/backend:latest
docker pull hotruongthinh237729/frontend:latest

# Chạy Backend (Thay MONGO_URI bằng chuỗi kết nối thực tế)
docker run -d -p 5000:5000 -e PORT=5000 -e MONGO_URI="your_mongodb_uri" hotruongthinh237729/backend:latest

# Chạy Frontend
docker run -d -p 3000:3000 hotruongthinh237729/frontend:latest

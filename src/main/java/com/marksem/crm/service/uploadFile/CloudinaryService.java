package com.marksem.crm.service.uploadFile;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CloudinaryService {
   String upload(MultipartFile file, String pathFolder) throws IOException;
}

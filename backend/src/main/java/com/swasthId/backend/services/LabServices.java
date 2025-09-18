package com.swasthId.backend.services;

import com.swasthId.backend.dto.LabResponse;
import com.swasthId.backend.entities.Lab;

public interface LabServices {

    LabResponse saveLab(Lab lb);

    Boolean isEmailExits(String email);

    LabResponse getlabById(String id);
}
